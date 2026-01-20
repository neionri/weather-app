# GitHub Actions Setup

This project uses GitHub Actions for automated CI/CD workflows.

## 🤖 Available Workflows

### 1. **Build & Test** (`build.yml`)
**Triggers**: Push to `main`, Pull Requests
- ✅ Checkout code
- ✅ Install dependencies
- ✅ Run linter
- ✅ Build project
- ✅ Upload build artifacts

### 2. **Deploy to Vercel** (`deploy.yml`)
**Triggers**: Push to `main`
- 🚀 Auto-deploy to Vercel production
- 📝 Comment deployment status on commit

### 3. **Dependency Review** (`dependency-review.yml`)
**Triggers**: Pull Requests
- 🔍 Check for vulnerable dependencies
- 📊 Comment security report on PR

### 4. **Code Quality** (`code-quality.yml`)
**Triggers**: Push to `main`, Pull Requests
- 🎨 Run ESLint
- 📐 Check code formatting with Prettier

---

## 🔧 Setup Required

### For Auto-Deploy to Vercel:

1. **Get Vercel Token**
   - Go to: https://vercel.com/account/tokens
   - Create new token
   - Copy the token

2. **Add GitHub Secrets**
   - Go to: `https://github.com/neionri/weather-app/settings/secrets/actions`
   - Click "New repository secret"
   - Add these secrets:
     - `VERCEL_TOKEN` → Your Vercel token
     - `VITE_WEATHER_API_KEY` → Your OpenWeatherMap API key

3. **Link Vercel Project**
   - Run locally: `vercel link`
   - This creates `.vercel` folder (already in `.gitignore`)

### For Build Workflow:

Add this secret:
- `VITE_WEATHER_API_KEY` → Your API key (for build process)

---

## 📊 Workflow Status

Check workflow runs at:
`https://github.com/neionri/weather-app/actions`

---

## 🎯 What Happens Automatically:

### On Every Push to `main`:
1. ✅ Code quality check
2. ✅ Build & test
3. 🚀 Auto-deploy to Vercel

### On Every Pull Request:
1. ✅ Code quality check
2. ✅ Build & test
3. 🔍 Dependency security review

---

## 🚫 Disabling Workflows

To disable a workflow, rename the file:
```bash
mv .github/workflows/deploy.yml .github/workflows/deploy.yml.disabled
```

---

## 📝 Notes

- All workflows use Node.js 20
- Build artifacts are kept for 7 days
- Failed builds will block PR merges (if branch protection is enabled)
