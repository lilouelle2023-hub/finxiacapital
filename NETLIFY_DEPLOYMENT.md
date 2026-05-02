# FINXIA Capital - Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

### Prerequisites
- GitHub repository: `lilouelle2023-hub/finxiacapital`
- Netlify account (free tier)

### Step-by-Step Deployment

#### 1. Connect Repository to Netlify

1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Search and select: **`lilouelle2023-hub/finxiacapital`**

#### 2. Configure Build Settings

Netlify should auto-detect the `netlify.toml` configuration file, but verify these settings:

- **Base directory**: `frontend-nextjs`
- **Build command**: `yarn build`
- **Publish directory**: `frontend-nextjs/out`
- **Node version**: 20

If auto-detection doesn't work, manually enter:
```
Base directory: frontend-nextjs
Build command: yarn build
Publish directory: out
```

#### 3. Environment Variables

In Netlify dashboard, go to:
**Site settings** → **Environment variables** → **Add a variable**

Add:
```
NEXT_PUBLIC_BACKEND_URL=https://finxia-preview.preview.emergentagent.com
```

*(Replace with your actual backend URL if different)*

#### 4. Deploy

Click **"Deploy site"**

Netlify will:
1. Clone your GitHub repository
2. Install dependencies (`yarn install`)
3. Build the Next.js app (`yarn build`)
4. Deploy the `/out` directory
5. Provide a live URL (e.g., `https://finxiacapital.netlify.app`)

#### 5. Custom Domain (Optional)

To use `finxiacapital.com`:

1. In Netlify: **Domain settings** → **Add custom domain**
2. Enter: `finxiacapital.com`
3. Follow DNS configuration instructions
4. In Cloudflare (your DNS provider):
   - Add CNAME record: `www` → `finxiacapital.netlify.app`
   - Add A record: `@` → Netlify's IP (provided in dashboard)

---

## 📋 Configuration Summary

### File Structure
```
/app/
├── netlify.toml              ← Netlify configuration (auto-detected)
└── frontend-nextjs/
    ├── package.json          ← Dependencies
    ├── next.config.ts        ← Next.js SSG config
    ├── out/                  ← Build output (created by yarn build)
    └── pages/                ← Next.js pages
```

### Build Process
1. Netlify reads `/netlify.toml`
2. Changes to `frontend-nextjs/` directory
3. Runs `yarn install`
4. Runs `yarn build`
5. Serves static files from `out/`

### Automatic Deploys
- **Push to main/master**: Auto-deploys
- **Pull requests**: Creates deploy preview
- **Custom branches**: Can be configured

---

## 🔧 Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Verify `yarn build` works locally: `cd frontend-nextjs && yarn build`

### 404 Errors
- Ensure `publish` directory is `out` (not `frontend-nextjs/out`)
- Check that `trailingSlash: true` is in `next.config.ts`

### Environment Variables Not Working
- Variable names must start with `NEXT_PUBLIC_`
- Re-deploy after adding environment variables

---

## 🎉 Success Checklist

- ✅ Netlify detects `netlify.toml` automatically
- ✅ Build completes successfully
- ✅ Site is live at `https://[your-site].netlify.app`
- ✅ All pages load correctly (homepage, about, contact, etc.)
- ✅ Navigation works
- ✅ Contact form submits to backend API

---

## 📞 Need Help?

Netlify support is available at: https://www.netlify.com/support/
