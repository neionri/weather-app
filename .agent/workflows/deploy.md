---
description: Deploy weather app to Vercel
---

# Deploy to Vercel

This workflow will deploy your weather app to Vercel for free hosting.

## Steps:

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Build the project** (optional, Vercel will do this automatically)
   ```bash
   npm run build
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

5. **Set environment variables on Vercel**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add: `VITE_WEATHER_API_KEY` with your API key value

6. **Redeploy** (if you added env vars after first deploy)
   ```bash
   vercel --prod
   ```

## Result:
Your app will be live at: `https://your-app-name.vercel.app`
