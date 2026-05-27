Tasbii Private App - Vercel Blob Setup
=====================================

This project is your private Tasbii app. It is not connected to Aliwvide or any other website.

Important files:
- index.html: 99 Names / main Tasbii page
- daily-dhikr.html: Daily Dhikr page
- dua-counter.html: My Dua Counter page
- tasbii-private-admin.html: private admin dashboard
- api/auth.js: checks ADMIN_PASSWORD
- api/packs.js: saves/loads Daily Dhikr data from Vercel Blob
- api/counter-duas.js: saves/loads My Dua data from Vercel Blob

Required Vercel Environment Variables:
--------------------------------------
ADMIN_PASSWORD=your-private-admin-password
BLOB_READ_WRITE_TOKEN=your-vercel-blob-read-write-token

Admin link after deployment:
----------------------------
https://your-domain.com/tasbii-private-admin

If admin does not open:
-----------------------
1. Open this URL:
   https://your-domain.com/api/auth

2. It should show:
   { "ok": true, "adminPasswordConfigured": true }

3. If adminPasswordConfigured is false, add ADMIN_PASSWORD in Vercel.

4. Open this URL:
   https://your-domain.com/api/counter-duas

5. If source is fallback, your app is not reading Vercel Blob. Check BLOB_READ_WRITE_TOKEN and redeploy.

After changing env variables:
-----------------------------
Always redeploy the project from Vercel Deployments.

How to add My Dua:
------------------
1. Open /tasbii-private-admin
2. Login with ADMIN_PASSWORD
3. Click My Dua
4. Click + New Dua
5. Fill title, Arabic, meaning, recitation limit, and note
6. Click Save Live
7. Open /dua-counter and refresh

How to add Daily Dhikr:
-----------------------
1. Open /tasbii-private-admin
2. Login with ADMIN_PASSWORD
3. Click Daily Dhikr
4. Add or edit a pack
5. Click + Add Dua
6. Click Save Live
7. Open /daily-dhikr and refresh
