function setHeaders(res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = async function handler(req, res) {
  setHeaders(res);

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(500).json({ error: 'ADMIN_PASSWORD env variable is missing in Vercel' });
  }

  const body = req.body || {};
  if (body.password === adminPassword) {
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: 'Wrong password' });
};
