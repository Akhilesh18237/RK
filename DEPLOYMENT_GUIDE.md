# GitHub Pages Deployment Guide

## ✅ Code Successfully Pushed!

Your code has been successfully pushed to GitHub. Now follow these steps to complete the deployment:

## 🔧 GitHub Repository Settings

### 1. Enable GitHub Pages
1. Go to your repository: https://github.com/Akhilesh18237/RK-Metal
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. This will allow the workflow to deploy automatically

### 2. Configure GitHub Pages Settings
- **Source**: GitHub Actions (already selected)
- **Custom domain**: `rkmetal.shop` (should be automatically detected from CNAME file)
- **Enforce HTTPS**: ✅ Check this box

### 3. Repository Permissions
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## 🚀 Deployment Process

### Automatic Deployment
- The GitHub Actions workflow will automatically trigger when you push to the `main` branch
- You can monitor the deployment progress in the **Actions** tab
- The workflow will:
  1. Build your React app
  2. Deploy to GitHub Pages
  3. Use your custom domain `rkmetal.shop`

### Manual Trigger (if needed)
1. Go to **Actions** tab
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select `main` branch and click **Run workflow**

## 🌐 DNS Configuration (Already Done)

Your GoDaddy DNS records should already be configured:
- **Type**: CNAME
- **Name**: @ or www
- **Value**: `Akhilesh18237.github.io`
- **TTL**: 3600 (or default)

## ⏱️ Deployment Timeline

- **Build time**: ~2-3 minutes
- **DNS propagation**: 5-30 minutes
- **Total time to live**: ~10-15 minutes

## 🔍 Verification Steps

1. **Check GitHub Actions**: Go to Actions tab to see deployment progress
2. **Check GitHub Pages**: Go to Settings → Pages to see deployment status
3. **Test the website**: Visit https://rkmetal.shop after deployment completes
4. **Check HTTPS**: Ensure the site loads with HTTPS

## 🐛 Troubleshooting

### If the site doesn't load:
1. Check GitHub Actions for build errors
2. Verify DNS settings in GoDaddy
3. Wait for DNS propagation (can take up to 24 hours)
4. Check if the custom domain is properly configured in GitHub Pages settings

### If you see a 404 error:
1. Ensure the CNAME file is in the `public` folder
2. Check that the base path in `vite.config.ts` is correct
3. Verify the routing configuration in `App.tsx`

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs for error messages
2. Verify all DNS records are correctly configured
3. Ensure the repository has the necessary permissions

---

**Your website should be live at https://rkmetal.shop within 10-15 minutes!** 