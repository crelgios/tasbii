const { put, list } = require('@vercel/blob');

function requireBlobToken() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error('BLOB_READ_WRITE_TOKEN env variable is missing. Connect Vercel Blob Storage to this Vercel project.');
  }
}

async function fetchJsonNoCache(url, label) {
  const joiner = url.includes('?') ? '&' : '?';
  const response = await fetch(url + joiner + 'v=' + Date.now(), {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, max-age=0',
      'Pragma': 'no-cache'
    }
  });
  if (!response.ok) throw new Error('Could not read ' + (label || 'Blob JSON'));
  return await response.json();
}

async function getLatestBlobUrl({ livePrefix, legacyFile }) {
  requireBlobToken();

  if (livePrefix) {
    const live = await list({ prefix: livePrefix, limit: 100 });
    const liveFiles = (live.blobs || [])
      .filter((blob) => blob.pathname && blob.pathname.startsWith(livePrefix))
      .sort((a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0));
    if (liveFiles[0] && liveFiles[0].url) return liveFiles[0].url;
  }

  if (legacyFile) {
    const legacy = await list({ prefix: legacyFile, limit: 100 });
    const legacyFiles = (legacy.blobs || [])
      .filter((blob) => blob.pathname === legacyFile)
      .sort((a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0));
    if (legacyFiles[0] && legacyFiles[0].url) return legacyFiles[0].url;
  }

  return null;
}

async function readLatestJson(options) {
  const url = await getLatestBlobUrl(options);
  if (!url) return null;
  return await fetchJsonNoCache(url, options.label);
}

async function writeUniqueJson({ prefix, data }) {
  requireBlobToken();
  const fileName = prefix + Date.now() + '.json';
  return await put(fileName, JSON.stringify(data, null, 2), {
    access: 'public',
    contentType: 'application/json; charset=utf-8',
    cacheControlMaxAge: 0
  });
}

module.exports = { requireBlobToken, readLatestJson, writeUniqueJson };
