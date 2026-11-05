# Startup Expo 2026 – Event Management Platform

Clean Next.js 15 + Prisma + Neon + Vercel deployment.

## Deploy on Vercel

1. Import this repo in Vercel
2. Set environment variables (see `.env.example`)
3. Deploy
4. Open `/api/setup?secret=YOUR_SETUP_SECRET` once
5. Login at `/admin/login` → `admin@startupexpo.com` / `Admin@12345`

## Required env vars

- `DATABASE_URL` (Neon)
- `NEXTAUTH_SECRET` / `AUTH_SECRET`
- `NEXT_PUBLIC_APP_URL`
- `SETUP_SECRET`
- `RESEND_API_KEY` (optional for emails)
- `BLOB_READ_WRITE_TOKEN` (optional for images)
