CHANGES MADE

- Restored Vercel Blob storage instead of Supabase.
- Added /api/_blob.js helper for server-side Blob reads/writes.
- Fixed /api/packs.js to save each update as a unique live JSON file.
- Fixed /api/counter-duas.js to save each update as a unique live JSON file.
- Kept the hidden admin page at /secure-aliwvide-control-9xq2m.
- Kept admin.html as noindex redirect/disabled old public admin.
- Removed Supabase files and environment variables.
- Main website keeps fallback JSON working until Blob data is saved.
