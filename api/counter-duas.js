const fs = require("fs");
const path = require("path");
const { put, list } = require("@vercel/blob");

const BLOB_FILE = "counter-duas.json";

function setNoStore(res){
  res.setHeader("Content-Type","application/json; charset=utf-8");
  res.setHeader("Cache-Control","no-store, max-age=0, must-revalidate");
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers","Content-Type");
}
function slugify(text){return String(text||"dua").toLowerCase().trim().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"dua";}
function validateDuas(input){
  const arr = Array.isArray(input) ? input : [];
  const used = new Set();
  return arr.map((d,i)=>{
    let id = slugify(d.id || d.title || `dua_${i+1}`), base=id, n=2;
    while(used.has(id)) id = base + "_" + n++;
    used.add(id);
    return {
      id,
      title: String(d.title || `Dua ${i+1}`).slice(0,160),
      arabic: String(d.arabic || "").slice(0,5000),
      meaning: String(d.meaning || "").slice(0,300),
      limit: Math.max(1, Number(d.limit) || 100),
      note: String(d.note || ("Recite " + (Math.max(1, Number(d.limit) || 100)) + " times")).slice(0,300)
    };
  });
}
function readFallbackFile(){try{return JSON.parse(fs.readFileSync(path.join(process.cwd(),"counter-duas.json"),"utf8"));}catch(e){return [];}}
async function getLatestBlobUrl(){const r=await list({prefix:BLOB_FILE,limit:100});const exact=(r.blobs||[]).filter(b=>b.pathname===BLOB_FILE).sort((a,b)=>new Date(b.uploadedAt||0)-new Date(a.uploadedAt||0));return exact[0]?.url||null;}
async function readBlobJson(){const url=await getLatestBlobUrl();if(!url)return null;const response=await fetch(url+"?t="+Date.now(),{cache:"no-store"});if(!response.ok)throw new Error("Could not read counter duas");return await response.json();}
module.exports = async function handler(req,res){
  setNoStore(res);
  if(req.method==="OPTIONS") return res.status(204).end();
  if(req.method==="GET"){
    try{const data=await readBlobJson(); if(data) return res.status(200).json(validateDuas(data));}catch(e){}
    return res.status(200).json(validateDuas(readFallbackFile()));
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
      const blob=await put(BLOB_FILE,JSON.stringify(duas,null,2),{access:"public",allowOverwrite:true,contentType:"application/json; charset=utf-8",cacheControlMaxAge:0});
      return res.status(200).json({ok:true,duas,blobUrl:blob.url,updatedAt:new Date().toISOString()});
    }catch(error){return res.status(400).json({error:error.message||"Save failed"});}
  }
  return res.status(405).json({error:"Method not allowed"});
};
