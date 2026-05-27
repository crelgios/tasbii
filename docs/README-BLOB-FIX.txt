Tasbii Blob Store Fix

Your old files are visible in the Vercel Blob store named tasbii-blob. If the app says:

Vercel Blob: This store does not exist.

then the deployed project is using the wrong BLOB_READ_WRITE_TOKEN, usually from a deleted/new/other Blob store.

Fix in Vercel:
1. Open Vercel Dashboard.
2. Open Storage.
3. Open the existing Blob store: tasbii-blob.
4. Use Connected Projects / Connect Project and connect it to your current Tasbii app project.
5. Open your Tasbii project > Settings > Environment Variables.
6. Delete the old BLOB_READ_WRITE_TOKEN if it exists.
7. Add/recreate BLOB_READ_WRITE_TOKEN from the connected tasbii-blob store.
8. Keep ADMIN_PASSWORD.
9. Redeploy the project.

Test after redeploy:
/api/blob-check
/api/counter-duas?debug=1
/api/packs?debug=1

If /api/blob-check shows ok:true and counterDuaFilesFound is more than 0, old duas are connected again.


ADMIN SAVE NOTIFICATION UPDATE
- The private admin now shows a top notification when saving.
- It shows Saving..., then Saved successfully, or the exact error message.
- Save buttons are disabled while saving to prevent double-click duplicate saves.
