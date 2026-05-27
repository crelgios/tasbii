VERCEL SETUP FOR THIS TASBEEH / DHIKR APP

1) Upload this project to GitHub or Vercel.
2) In Vercel, open your project.
3) Go to Storage and create/connect a Vercel Blob store.
4) Make sure Vercel adds BLOB_READ_WRITE_TOKEN to this same project.
5) Go to Settings > Environment Variables and add:

   ADMIN_PASSWORD=your-secure-admin-password
   BLOB_READ_WRITE_TOKEN=your-vercel-blob-read-write-token

6) Redeploy the project after adding env variables.
7) Open hidden admin URL:

   /secure-aliwvide-control-9xq2m

Public pages will use dhikr-packs.json and counter-duas.json as fallback until live Blob data is saved.
