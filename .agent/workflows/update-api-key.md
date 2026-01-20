---
description: Update API key in environment
---

# Update API Key

This workflow helps you update your OpenWeatherMap API key.

## When to use:
- API key expired
- Switching to a different API key
- API key compromised

## Steps:

1. **Get new API key**
   - Go to: https://openweathermap.org/api
   - Login to your account
   - Generate new API key
   - Wait 5-10 minutes for activation

2. **Update .env file**
   - Open `.env` file in the root directory
   - Update the line:
     ```env
     VITE_WEATHER_API_KEY=your_new_api_key_here
     ```

3. **Restart dev server**
   - Stop the current server (Ctrl+C)
   - Start again:
     ```bash
     npm run dev
     ```

4. **Test the app**
   - Open: http://localhost:5173
   - Search for a city
   - Verify weather data loads correctly

## For Production (Vercel):

1. **Update environment variable**
   - Go to Vercel dashboard
   - Select your project
   - Settings → Environment Variables
   - Edit `VITE_WEATHER_API_KEY`
   - Save

2. **Redeploy**
   ```bash
   vercel --prod
   ```

## Security Note:
⚠️ Never commit `.env` file to GitHub!
The `.env` file is already in `.gitignore` for your safety.
