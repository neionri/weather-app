---
description: Setup project for new developers
---

# Setup Development Environment

This workflow helps new developers set up the weather app on their machine.

## Prerequisites:
- Node.js v16 or higher
- Git
- OpenWeatherMap API key

## Steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/neionri/weather-app.git
   cd weather-app
   ```

// turbo
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Add your API key**
   - Open `.env` file
   - Replace `your_api_key_here` with your actual OpenWeatherMap API key
   - Get API key from: https://openweathermap.org/api

// turbo
5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - Navigate to: http://localhost:5173

## Troubleshooting:

- If API key doesn't work, wait 5-10 minutes for activation
- If port 5173 is busy, Vite will use another port
- Check console for any errors

## Done! 🎉
You should now see the weather app running locally.
