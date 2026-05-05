const fs = require("fs");
const path = require("path");
const { put, list } = require("@vercel/blob");

// IMPORTANT: use a unique blob file for every save.
// Mobile browsers/CDNs can keep the old same-name JSON cached, so this avoids stale data.
const LEGACY_FILE = "counter-duas.json";
const LIVE_PREFIX = "counter-duas-live-";

function setNoStore(res){
  res.setHeader("Content-Type","application/json; charset=utf-8");
  res.setHeader("Cache-Control","no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma","no-cache");
  res.setHeader("Expires","0");
  res.setHeader("Surrogate-Control","no-store");
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers","Content-Type, Cache-Control, Pragma");
}

function slugify(text){
  return String(text||"dua").toLowerCase().trim().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"dua";
}

function validateDuas(input){
  const arr = Array.isArray(input) ? input : [];
  const used = new Set();
  return arr.map((d,i)=>{
    let id = slugify(d.id || d.title || `dua_${i+1}`), base=id, n=2;
    while(used.has(id)) id = base + "_" + n++;
    used.add(id);
    const limit = Math.max(1, Number(d.limit) || 100);
    return {
      id,
      title: String(d.title || `Dua ${i+1}`).slice(0,160),
      arabic: String(d.arabic || "").slice(0,5000),
      meaning: String(d.meaning || "").slice(0,300),
      limit,
      note: String(d.note || ("Recite " + limit + " times")).slice(0,300)
    };
  });
}

function readFallbackFile(){
  try{return JSON.parse(fs.readFileSync(path.join(process.cwd(),"counter-duas.json"),"utf8"));}
  catch(e){return [];}
}

async function fetchJson(url){
  const joiner = url.includes("?") ? "&" : "?";
  const response = await fetch(url + joiner + "v=" + Date.now(), {
    cache:"no-store",
    headers:{"Cache-Control":"no-cache","Pragma":"no-cache"}
  });
  if(!response.ok) throw new Error("Could not read counter duas");
  return await response.json();
}

async function getLatestBlobUrl(){
  // Prefer new unique live files, then fallback to old same-name file.
  const live = await list({prefix: LIVE_PREFIX, limit:100});
  const liveFiles = (live.blobs||[]).sort((a,b)=>new Date(b.uploadedAt||0)-new Date(a.uploadedAt||0));
  if(liveFiles[0]?.url) return liveFiles[0].url;

  const legacy = await list({prefix: LEGACY_FILE, limit:100});
  const legacyFiles = (legacy.blobs||[]).filter(b=>b.pathname===LEGACY_FILE).sort((a,b)=>new Date(b.uploadedAt||0)-new Date(a.uploadedAt||0));
  return legacyFiles[0]?.url || null;
}

async function readBlobJson(){
  const url = await getLatestBlobUrl();
  if(!url) return null;
  return await fetchJson(url);
}

module.exports = async function handler(req,res){
  setNoStore(res);
  if(req.method==="OPTIONS") return res.status(204).end();

  if(req.method==="GET"){
    try{
      const data = await readBlobJson();
      if(data) return res.status(200).json({ok:true, source:"blob", updatedAt:new Date().toISOString(), duas:validateDuas(data)});
    }catch(e){}
    return res.status(200).json({ok:true, source:"fallback", updatedAt:new Date().toISOString(), duas:validateDuas(readFallbackFile())});
  }

  if(req.method==="POST"){
    try{
      const adminPassword=process.env.ADMIN_PASSWORD;
      if(!adminPassword) return res.status(500).json({error:"ADMIN_PASSWORD env variable is missing in Vercel"});
      if(!process.env.BLOB_READ_WRITE_TOKEN) return res.status(500).json({error:"BLOB_READ_WRITE_TOKEN env variable is missing. Connect Vercel Blob Storage."});
      const body=req.body||{};
      if(body.password!==adminPassword) return res.status(401).json({error:"Wrong admin password"});
      const duas=validateDuas(body.duas);
      if(!duas.length) throw new Error("Add at least one dua");

      const fileName = LIVE_PREFIX + Date.now() + ".json";
      const blob=await put(fileName, JSON.stringify(duas,null,2), {
        access:"public",
        contentType:"application/json; charset=utf-8",
        cacheControlMaxAge:0
      });
      return res.status(200).json({ok:true, duas, blobUrl:blob.url, updatedAt:new Date().toISOString()});
    }catch(error){return res.status(400).json({error:error.message||"Save failed"});}
  }

  return res.status(405).json({error:"Method not allowed"});
};
