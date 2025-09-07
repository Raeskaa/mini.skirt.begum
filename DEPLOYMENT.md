# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment

Your website is now configured for automatic deployment to GitHub Pages! Here's how it works:

### ✅ What's Already Set Up

1. **Next.js Static Export**: Configured to generate static HTML files
2. **GitHub Actions Workflow**: Automatically builds and deploys on every push to `main`
3. **GitHub Pages Configuration**: Ready to serve your static site
4. **Custom 404 Page**: Handles missing pages gracefully
5. **Asset Optimization**: Images and assets are optimized for static hosting

### 🔧 How to Deploy

#### Option 1: Automatic Deployment (Recommended)
1. **Push to GitHub**: Any push to the `main` branch triggers automatic deployment
2. **Wait for Build**: GitHub Actions will build your site (takes ~2-3 minutes)
3. **Access Your Site**: Your site will be available at:
   ```
   https://raeskaa.github.io/mini.skirt.begum/
   ```

#### Option 2: Manual Deployment
If you prefer manual control:

```bash
# Build the site
npm run build

# The static files will be in the 'out' directory
# You can then deploy these files to any static hosting service
```

### 📁 Build Output

After building, your static site will be in the `out/` directory with:
- `index.html` - Homepage
- `work/` - Work pages
- `artists/` - Artists page
- `offerings/` - Offerings page
- `styling/` - Design system showcase
- Static assets (CSS, JS, images)

### 🌐 GitHub Pages Settings

To enable GitHub Pages:

1. Go to your repository: https://github.com/Raeskaa/mini.skirt.begum
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Your site will be available at: `https://raeskaa.github.io/mini.skirt.begum/`

### 🔄 Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) does the following:

1. **Triggers**: On every push to `main` branch
2. **Environment**: Uses Ubuntu with Node.js 18
3. **Build Process**: 
   - Installs dependencies with `npm ci`
   - Builds the site with `npm run build`
   - Generates static files in `out/` directory
4. **Deployment**: Uses `peaceiris/actions-gh-pages` to deploy to GitHub Pages

### 🛠️ Local Development

For local development:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npx serve out
```

### 📱 Features Included

- ✅ **Responsive Design**: Works on all devices
- ✅ **Fast Loading**: Optimized static files
- ✅ **SEO Ready**: Proper meta tags and structure
- ✅ **Custom 404**: Handles missing pages
- ✅ **Modern Design**: Complete design system
- ✅ **Interactive Elements**: Client-side interactivity where needed

### 🎯 Next Steps

1. **Enable GitHub Pages** in repository settings
2. **Push any changes** to trigger deployment
3. **Share your live site** with the world!

Your website will be live at: **https://raeskaa.github.io/mini.skirt.begum/**

### 🆘 Troubleshooting

If deployment fails:
1. Check the **Actions** tab in your GitHub repository
2. Look for failed workflow runs
3. Common issues:
   - Build errors (check the build logs)
   - Missing dependencies
   - TypeScript errors

### 📞 Support

The deployment is fully automated and should work out of the box. If you encounter any issues, check the GitHub Actions logs for detailed error messages.
