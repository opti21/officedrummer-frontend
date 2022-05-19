# Officedrummer Song Panel frontend

Song panel for [officedrummer](https://twitch.tv/officedrummer) on twitch

## How to run

duplicate `.env.example` to `.env.local` and put in your test creds

Then run dev server:

```bash
pnpm run dev
# or
npm run dev
```

## Twitch application setup

When you're setting up a test application on twitch make sure to set the callback to:

```
http://localhost:3000/api/auth/callback/twitch
```
