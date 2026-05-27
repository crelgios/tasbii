const fs = require('fs');
const path = require('path');
const { readAllJson, writeUniqueJson, requireBlobToken } = require('./_blob');

const LEGACY_FILE = 'dhikr-packs.json';
const LIVE_PREFIX = 'dhikr-packs-live-';

function setNoStore(res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control, Pragma');
}


async function parseJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body || '{}'); } catch (e) { return {}; }
  }
  return await new Promise((resolve) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; });
    req.on('end', () => {
      try { resolve(raw ? JSON.parse(raw) : {}); } catch (e) { resolve({}); }
    });
    req.on('error', () => resolve({}));
  });
}

function normalizePacks(data) {
  if (Array.isArray(data)) {
    return Object.fromEntries(data.map((p, i) => [p.id || `pack_${i + 1}`, {
      name: p.name || `Pack ${i + 1}`,
      desc: p.desc || '',
      steps: Array.isArray(p.steps) ? p.steps : []
    }]));
  }
  if (data && data.packs && typeof data.packs === 'object') return data.packs;
  if (data && typeof data === 'object') return data;
  return {};
}

function validatePacks(packs) {
  const obj = normalizePacks(packs);
  const keys = Object.keys(obj);
  if (!keys.length) throw new Error('At least one tab/pack is required');

  for (const key of keys) {
    const pack = obj[key];
    if (!pack || typeof pack !== 'object') throw new Error(`Invalid pack: ${key}`);

    pack.name = String(pack.name || key).slice(0, 120);
    pack.desc = String(pack.desc || '').slice(0, 250);
    pack.steps = Array.isArray(pack.steps) ? pack.steps : [];
    pack.steps = pack.steps.map((step) => ({
      title: String(step.title || 'Untitled Dua').slice(0, 160),
      target: Math.max(1, Math.min(10000, Number(step.target || step.limit || step.count) || 1)),
      arabic: String(step.arabic || step.text || '').slice(0, 5000),
      note: String(step.note || step.meaning || '').slice(0, 300)
    }));
  }
  return obj;
}

function mergePacks(list){
  const out = {};
  for (const data of list.reverse()) {
    const packs = validatePacks(data);
    for (const [key, pack] of Object.entries(packs)) {
      out[key] = { ...(out[key] || {}), ...pack };
    }
  }
  return out;
}

function readFallbackFile() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'dhikr-packs.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return {};
  }
}

async function readBlobPacks() {
  const versions = await readAllJson({ livePrefix: LIVE_PREFIX, legacyFile: LEGACY_FILE, label: 'dhikr packs' });
  if (!versions.length) return null;
  return mergePacks(versions.map(v => v.data));
}

module.exports = async function handler(req, res) {
  setNoStore(res);

  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'GET') {
    try {
      const blobData = await readBlobPacks();
      if (blobData && Object.keys(blobData).length) return res.status(200).json(blobData);
    } catch (e) {
      // Keep public pages working from backup JSON if Blob is not configured yet.
    }
    return res.status(200).json(validatePacks(readFallbackFile()));
  }

  if (req.method === 'POST') {
    try {
      const adminPassword = process.env.ADMIN_PASSWORD;
      if (!adminPassword) return res.status(500).json({ error: 'ADMIN_PASSWORD env variable is missing in Vercel' });
      requireBlobToken();

      const body = await parseJsonBody(req);
      if (body.password !== adminPassword) return res.status(401).json({ error: 'Wrong admin password' });

      const packs = validatePacks(body.packs);
      const blob = await writeUniqueJson({ prefix: LIVE_PREFIX, data: packs });

      return res.status(200).json({ ok: true, packs, blobUrl: blob.url, updatedAt: new Date().toISOString() });
    } catch (error) {
      return res.status(400).json({ error: error.message || 'Save failed' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
