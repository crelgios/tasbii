Tasbii App - Clean Vercel Blob Version

FILES KEPT
- index.html: 99 Names Tasbeeh page
- daily-dhikr.html: Daily Dhikr page
- dua-counter.html: My Dua Counter page
- secure-aliwvide-control-9xq2m.html: hidden admin page
- dhikr-packs.json: fallback Daily Dhikr data
- counter-duas.json: fallback My Dua data
- api/auth.js: checks admin password
- api/packs.js: reads/saves Daily Dhikr data to Vercel Blob
- api/counter-duas.js: reads/saves My Dua data to Vercel Blob
- api/_blob.js: Vercel Blob helper
- package.json and vercel.json: deployment config

FILES REMOVED
- old public admin.html redirect
- old duplicate admin-main.js
- multiple old README/change-note files
- unused Supabase/env example files
- hidden admin-tab unlock code from index.html

VERCEL ENVIRONMENT VARIABLES
Add these in Vercel Project > Settings > Environment Variables:

ADMIN_PASSWORD=your-password
BLOB_READ_WRITE_TOKEN=your-vercel-blob-read-write-token

After adding/changing env variables, redeploy the Vercel project.

HIDDEN ADMIN URL
https://your-domain.com/secure-aliwvide-control-9xq2m

HOW TO ADD A NEW MY DUA TASBIH
1. Open the hidden admin URL.
2. Enter your ADMIN_PASSWORD.
3. Click the My Dua tab.
4. Click + New Dua.
5. Fill:
   - Dua Title
   - Arabic / Dua Text
   - Meaning
   - Recitation Limit
   - Note
6. Click Save Live.
7. Open /dua-counter.html and refresh.

HOW TO ADD A NEW DAILY DHIKR TAB/DUA
1. Open the hidden admin URL.
2. Enter your ADMIN_PASSWORD.
3. Stay on the Daily Dhikr tab.
4. Use + New Pack if you want a new tab/category.
5. Use + New Dua inside the selected pack to add a dua.
6. Fill title, target count, Arabic text, and note.
7. Click Save Live.
8. Open /daily-dhikr.html and refresh.
