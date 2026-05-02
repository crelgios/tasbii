Delete fix:
- Deleting a pack in admin now immediately saves the changed pack list to /api/packs.
- Daily Dhikr reads /api/packs with cache-busting, so deleted packs should disappear from the dropdown after refresh.
- After deploying this update, redeploy once on Vercel.
