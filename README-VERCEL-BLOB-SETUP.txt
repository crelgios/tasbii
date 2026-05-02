VERCEL BLOB LIVE ADMIN SETUP

This version lets you update Daily Dhikr packs from admin.html without replacing JSON files manually.
It uses Vercel API Functions + Vercel Blob Storage.

FILES:
- index.html = 99 Names page
- daily-dhikr.html = public Daily Dhikr page
- admin.html = password protected admin editor
- dhikr-packs.json = fallback default data
- api/packs.js = reads/writes live JSON to Vercel Blob
- package.json = installs @vercel/blob

VERCEL SETUP:
1. Upload/deploy this whole project to Vercel.
2. In Vercel dashboard, open your project.
3. Go to Storage > Create Database > Blob.
4. Choose Public Blob store.
5. Connect it to this project. Vercel should add BLOB_READ_WRITE_TOKEN automatically.
6. Go to Settings > Environment Variables.
7. Add ADMIN_PASSWORD = your password, for example 786.
8. Redeploy the project.

HOW TO UPDATE FROM PHONE:
1. Open your-site.vercel.app/admin.html
2. Add/edit duas.
3. Click Save Live.
4. Open daily-dhikr.html and hard refresh if needed.

NOTE:
Do not put BLOB_READ_WRITE_TOKEN in frontend HTML. It stays safely in Vercel environment variables and is used only by api/packs.js.
