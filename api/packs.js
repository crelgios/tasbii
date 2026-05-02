const fs = require("fs");
const path = require("path");
const { put, list } = require("@vercel/blob");

const BLOB_FILE = "dhikr-packs.json";

function setNoStore(res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function normalizePacks(data) {
  if (Array.isArray(data)) {
    return Object.fromEntries(data.map((p, i) => [p.id || `pack_${i + 1}`, {
      name: p.name || `Pack ${i + 1}`,
      desc: p.desc || "",
      steps: Array.isArray(p.steps) ? p.steps : []
    }]));
  }
  if (data && typeof data === "object") return data;
  return {};
}

function validatePacks(packs) {
  const obj = normalizePacks(packs);
  const keys = Object.keys(obj);
  if (!keys.length) throw new Error("At least one pack is required");

  for (const key of keys) {
    const pack = obj[key];
    if (!pack || typeof pack !== "object") throw new Error(`Invalid pack: ${key}`);

    pack.name = String(pack.name || key).slice(0, 120);
    pack.desc = String(pack.desc || "").slice(0, 250);
    pack.steps = Array.isArray(pack.steps) ? pack.steps : [];
    pack.steps = pack.steps.map((step) => ({
      title: String(step.title || "Untitled Dua").slice(0, 160),
      target: Math.max(1, Math.min(10000, Number(step.target) || 1)),
      arabic: String(step.arabic || "").slice(0, 5000),
      note: String(step.note || "").slice(0, 300)
    }));
  }
  return obj;
}

function readFallbackFile() {
  try {
    const filePath = path.join(process.cwd(), "dhikr-packs.json");
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return {};
  }
}

async function getLatestBlobUrl() {
  const result = await list({ prefix: BLOB_FILE, limit: 100 });
  const exact = (result.blobs || [])
    .filter((b) => b.pathname === BLOB_FILE)
    .sort((a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0));
  return exact[0]?.url || null;
}

async function readBlobJson() {
  const url = await getLatestBlobUrl();
  if (!url) return null;
  const response = await fetch(url + "?t=" + Date.now(), { cache: "no-store" });
  if (!response.ok) throw new Error("Could not read Blob JSON");
  return await response.json();
}

module.exports = async function handler(req, res) {
  setNoStore(res);

  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method === "GET") {
    try {
      const blobData = await readBlobJson();
      if (blobData) return res.status(200).json(blobData);
    } catch (e) {
      // fallback below
    }
    return res.status(200).json(readFallbackFile());
  }

  if (req.method === "POST") {
    try {
      const adminPassword = process.env.ADMIN_PASSWORD;
      if (!adminPassword) return res.status(500).json({ error: "ADMIN_PASSWORD env variable is missing in Vercel" });
      if (!process.env.BLOB_READ_WRITE_TOKEN) return res.status(500).json({ error: "BLOB_READ_WRITE_TOKEN env variable is missing. Connect Vercel Blob Storage to this project." });

      const body = req.body || {};
      if (body.password !== adminPassword) return res.status(401).json({ error: "Wrong admin password" });

      const packs = validatePacks(body.packs);
      const blob = await put(BLOB_FILE, JSON.stringify(packs, null, 2), {
        access: "public",
        allowOverwrite: true,
        contentType: "application/json; charset=utf-8",
        cacheControlMaxAge: 0
      });

      return res.status(200).json({ ok: true, packs, blobUrl: blob.url, updatedAt: new Date().toISOString() });
    } catch (error) {
      return res.status(400).json({ error: error.message || "Save failed" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
