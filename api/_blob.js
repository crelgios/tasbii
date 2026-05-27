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

async function getBlobJsonCandidates({ livePrefix, legacyFile }) {
  requireBlobToken();
  const files = [];
  const seen = new Set();

  async function addList(prefix, filter) {
    if (!prefix) return;
    const result = await list({ prefix, limit: 1000 });
    for (const blob of result.blobs || []) {
      if (!blob || !blob.url || !blob.pathname) continue;
      if (filter && !filter(blob)) continue;
      const key = blob.pathname + '|' + blob.url;
      if (seen.has(key)) continue;
      seen.add(key);
      files.push(blob);
    }
  }

  await addList(livePrefix, (blob) => blob.pathname.startsWith(livePrefix));
  await addList(legacyFile, (blob) => blob.pathname === legacyFile);

  return files.sort((a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0));
}

async function getLatestBlobUrl(options) {
  const files = await getBlobJsonCandidates(options);
  return files[0] && files[0].url ? files[0].url : null;
}

async function readLatestJson(options) {
  const url = await getLatestBlobUrl(options);
  if (!url) return null;
  return await fetchJsonNoCache(url, options.label);
}

async function readAllJson(options) {
  const files = await getBlobJsonCandidates(options);
  const output = [];
  for (const blob of files) {
    try {
      output.push({
        pathname: blob.pathname,
        uploadedAt: blob.uploadedAt,
        data: await fetchJsonNoCache(blob.url, options.label)
      });
    } catch (e) {
      // Skip unreadable older blobs but continue reading the rest.
    }
  }
  return output;
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

module.exports = { requireBlobToken, readLatestJson, readAllJson, writeUniqueJson };
