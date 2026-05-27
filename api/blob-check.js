const { list, put } = require('@vercel/blob');

function setJson(res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, no-cache, max-age=0, must-revalidate');
}

module.exports = async function handler(req, res) {
  setJson(res);
  const token = process.env.BLOB_READ_WRITE_TOKEN || '';
  const info = {
    ok: false,
    tokenConfigured: Boolean(token),
    tokenLooksLikeBlobToken: token.startsWith('vercel_blob_rw_'),
    tokenLength: token ? token.length : 0,
    adminPasswordConfigured: Boolean(process.env.ADMIN_PASSWORD),
    expectedStore: 'tasbii-blob',
    checkedAt: new Date().toISOString()
  };

  if (!token) {
    return res.status(200).json({
      ...info,
      error: 'BLOB_READ_WRITE_TOKEN is missing in this Vercel project environment variables.'
    });
  }

  try {
    const result = await list({ limit: 1000 });
    const paths = (result.blobs || []).map(b => b.pathname).filter(Boolean);
    const counterFiles = paths.filter(p => p === 'counter-duas.json' || p.startsWith('counter-duas-live-'));
    const packFiles = paths.filter(p => p === 'dhikr-packs.json' || p.startsWith('dhikr-packs-live-'));
    return res.status(200).json({
      ...info,
      ok: true,
      totalFilesFound: paths.length,
      counterDuaFilesFound: counterFiles.length,
      dailyDhikrFilesFound: packFiles.length,
      sampleFiles: paths.slice(0, 20),
      message: 'Blob token is valid and this deployment can read the connected Blob store.'
    });
  } catch (error) {
    return res.status(200).json({
      ...info,
      error: error && error.message ? error.message : String(error),
      fix: 'Reconnect the existing tasbii-blob store to this exact Vercel project, delete the old BLOB_READ_WRITE_TOKEN env variable, let Vercel create a fresh token, then redeploy.'
    });
  }
};
