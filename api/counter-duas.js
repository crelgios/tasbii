const fs = require('fs');
const path = require('path');
const { readAllJson, writeUniqueJson, requireBlobToken } = require('./_blob');

const LEGACY_FILE = 'counter-duas.json';
const LIVE_PREFIX = 'counter-duas-live-';

function setNoStore(res){
  res.setHeader('Content-Type','application/json; charset=utf-8');
  res.setHeader('Cache-Control','no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma','no-cache');
  res.setHeader('Expires','0');
  res.setHeader('Surrogate-Control','no-store');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Cache-Control, Pragma');
}

function slugify(text){
  return String(text||'dua').toLowerCase().trim().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'')||'dua';
}

function validateDuas(input){
  const raw = Array.isArray(input) ? input : (input && Array.isArray(input.duas) ? input.duas : []);
  const used = new Set();
  return raw.map((d,i)=>{
    let id = slugify(d.id || d.title || `dua_${i+1}`), base=id, n=2;
    while(used.has(id)) id = base + '_' + n++;
    used.add(id);
    const limit = Math.max(1, Math.min(10000, Number(d.limit || d.target || d.count) || 100));
    return {
      id,
      title: String(d.title || d.name || `Dua ${i+1}`).slice(0,160),
      arabic: String(d.arabic || d.text || '').slice(0,5000),
      meaning: String(d.meaning || d.translation || '').slice(0,300),
      limit,
      note: String(d.note || d.description || ('Recite ' + limit + ' times')).slice(0,300)
    };
  }).filter(d => d.title || d.arabic);
}

function mergeDuaLists(lists){
  const map = new Map();
  // Apply older first, latest last. Missing older duas remain, updated latest duas win.
  for (const list of lists.reverse()) {
    for (const dua of validateDuas(list)) {
      const key = dua.id || slugify(dua.title);
      map.set(key, { ...(map.get(key) || {}), ...dua });
    }
  }
  return Array.from(map.values());
}

function readFallbackFile(){
  try{return JSON.parse(fs.readFileSync(path.join(process.cwd(),'counter-duas.json'),'utf8'));}
  catch(e){return [];} 
}

async function readBlobDuas(){
  const versions = await readAllJson({ livePrefix: LIVE_PREFIX, legacyFile: LEGACY_FILE, label: 'counter duas' });
  if (!versions.length) return null;
  return mergeDuaLists(versions.map(v => v.data));
}

module.exports = async function handler(req,res){
  setNoStore(res);
  if(req.method==='OPTIONS') return res.status(204).end();

  if(req.method==='GET'){
    try{
      const data = await readBlobDuas();
      if(data && data.length) return res.status(200).json({ok:true, source:'blob-merged', updatedAt:new Date().toISOString(), duas:data});
    }catch(e){
      // Keep page alive with JSON fallback until Blob env/store is configured.
    }
    return res.status(200).json({ok:true, source:'fallback', updatedAt:new Date().toISOString(), duas:validateDuas(readFallbackFile())});
  }

  if(req.method==='POST'){
    try{
      const adminPassword=process.env.ADMIN_PASSWORD;
      if(!adminPassword) return res.status(500).json({error:'ADMIN_PASSWORD env variable is missing in Vercel'});
      requireBlobToken();
      const body=req.body||{};
      if(body.password!==adminPassword) return res.status(401).json({error:'Wrong admin password'});
      const duas=validateDuas(body.duas);
      if(!duas.length) throw new Error('Add at least one dua');

      const blob=await writeUniqueJson({ prefix: LIVE_PREFIX, data: duas });
      return res.status(200).json({ok:true, duas, blobUrl:blob.url, updatedAt:new Date().toISOString()});
    }catch(error){return res.status(400).json({error:error.message||'Save failed'});}
  }

  return res.status(405).json({error:'Method not allowed'});
};
