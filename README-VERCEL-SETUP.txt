VERCEL LIVE ADMIN SETUP

This version lets admin.html update Daily Dhikr live without replacing JSON files.

1) Upload this full folder to GitHub.
2) Import/deploy it on Vercel.
3) In Vercel dashboard, open your project.
4) Go to Storage and create/connect a KV database.
   Vercel will add KV environment variables automatically.
5) Go to Settings > Environment Variables and add:
   ADMIN_PASSWORD = your-password-here
6) Redeploy the project.
7) Open /admin.html, add or edit duas, then click Save.
8) Open /daily-dhikr.html. Your new duas should show for everyone.

Do not put your Vercel token or GitHub token inside the website.
Only use ADMIN_PASSWORD in Vercel Environment Variables.
