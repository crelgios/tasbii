VERCEL BLOB SETUP

This version uses Vercel Blob again. Supabase is not required.

Required environment variables in Vercel:

ADMIN_PASSWORD=your-secure-admin-password
BLOB_READ_WRITE_TOKEN=your-vercel-blob-read-write-token

How to get BLOB_READ_WRITE_TOKEN:
1) Vercel Dashboard > Your Project > Storage
2) Create Database > Blob
3) Connect the Blob store to this project
4) Check Project Settings > Environment Variables
5) Redeploy after the token is added

The hidden admin page is:
/secure-aliwvide-control-9xq2m
