# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites
- GitHub account with your code pushed to a repository
- Vercel account (free tier available)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [https://vercel.com](https://vercel.com)
   - Sign in with your GitHub account

3. **Import Project**
   - Click "Add New Project"
   - Select your `stellar-love` repository
   - Vercel will auto-detect Next.js settings

4. **Configure Project** (usually auto-detected)
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Automatic Deployments

Once connected to GitHub:
- **Every push to `main` branch** → Automatic production deployment
- **Pull requests** → Preview deployments (unique URLs)
- **Other branches** → Preview deployments

### Environment Variables

If you need environment variables later:
1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add your variables
4. Redeploy

### Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Settings → Domains
3. Add your domain
4. Follow DNS configuration instructions

### Build Optimization

Your project is already optimized for Vercel:
- ✅ Next.js 16 with App Router
- ✅ Static generation ready
- ✅ No server-side dependencies
- ✅ Client-side only components

### Post-Deployment Checklist

- [ ] Test the live site
- [ ] Verify audio files load (if added)
- [ ] Test on mobile devices
- [ ] Check 3D rendering performance
- [ ] Verify all stars are clickable
- [ ] Test secret constellation sequence

### Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

**Audio not loading:**
- Ensure audio files are in `public/audio/` directory
- Check file paths in your code
- Verify files are committed to git

**Performance issues:**
- Vercel automatically optimizes Next.js apps
- Check Vercel Analytics for insights
- Consider reducing particle count for lower-end devices

## Alternative: Render Deployment

If you prefer Render:

1. **Create Render Account**
   - Visit [https://render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Connect your repository
   - Select "Web Service"
   - Choose your repository

3. **Configure**
   - **Name**: stellar-love
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better performance)

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment

**Note**: Vercel is still recommended for Next.js projects due to better optimization and zero-config setup.

## Cost Comparison

### Vercel Free Tier
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Perfect for this project

### Render Free Tier
- ✅ 750 hours/month
- ✅ Sleeps after 15 min inactivity (free tier)
- ✅ Requires more configuration
- ⚠️ Slower cold starts

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: support@vercel.com

