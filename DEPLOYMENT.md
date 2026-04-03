# 🚀 Deployment Checklist

## Pre-Deployment Setup

### 1. **Customize Your Content**
- [ ] Update your actual poems in `src/data/poems.js`
- [ ] Update social links in `src/components/Footer.jsx`
- [ ] Update email/contact info in Footer
- [ ] Update SEO meta tags in `index.html`
- [ ] Update profile links (LinkedIn, Twitter, etc.)

### 2. **Test Locally**
```bash
npm install
npm run dev
```
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Test responsiveness at different screen sizes
- [ ] Click through all interactive elements
- [ ] Test modal poem viewing

### 3. **Prepare for Production**
```bash
npm run build
npm run preview
```
- [ ] Check build completes without errors
- [ ] Preview build looks correct
- [ ] Test all links work properly
- [ ] Verify animations are smooth

## Deployment to Vercel

### Option A: One-Click Deploy (Easiest)

1. **Push to GitHub**
   - Create a new GitHub repository: `Aman_Joshi_Poems`
   - Push your code to GitHub

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Vercel automatically detects Vite configuration ✨

### Option B: Using Vercel CLI

```bash
npm install -g vercel
cd e:\Aman_Joshi_Poems
vercel login
vercel
```

Follow the prompts and select:
- Project name: `aman-joshi-poems`
- Framework: Vite
- Root directory: ./

## Post-Deployment

### 4. **Configure Custom Domain (Optional)**
- [ ] In Vercel project settings → Domains
- [ ] Add your custom domain if you have one
- [ ] Point DNS records (follow Vercel's instructions)

### 5. **Update Portfolio Link**
- [ ] On your main portfolio (amanjoshi.vercel.app)
- [ ] Add a link to: `https://poems.amanjoshi.vercel.app` or your custom domain
- [ ] Add a button like "Explore My Poetry" or "Poetry Collection"

### 6. **Monitor & Maintain**
- [ ] Check Vercel Analytics dashboard
- [ ] Monitor page performance
- [ ] Keep poems updated regularly
- [ ] Review analytics monthly

## Vercel Project Settings Recommendations

After deployment, go to **Project Settings** and configure:

- **Build & Development Settings**
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Install Command: `npm install`

- **Environment Variables** (if needed later)
  - Add any API keys or environment variables

- **Domains**
  - Primary domain settings
  - SSL/TLS automatically enabled

- **Analytics**
  - Enable Web Analytics
  - Monitor page performance

## Connecting to Your Main Portfolio

### In your main portfolio project:

1. Add a navigation link or button:
```jsx
<a href="https://poems.amanjoshi.vercel.app" target="_blank" rel="noopener noreferrer">
  Explore My Poetry →
</a>
```

2. Add a project card on your portfolio:
```jsx
<ProjectCard
  title="Poetry & Reflections"
  description="A collection of personal poems and reflections"
  link="https://poems.amanjoshi.vercel.app"
  tags={["Writing", "Personal Project", "Creative"]}
/>
```

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 16+)
- Clear cache: `npm cache clean --force`

### Deploy Fails
- Check `.gitignore` doesn't exclude important files
- Verify `package.json` is in root directory
- Check Internet connection during deployment

### Site Looks Different
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Check CSS is correct in browser DevTools

## Performance Tips

- Vercel automatically optimizes images and caches assets
- Your site will be fast globally due to Vercel's CDN
- Consider adding more poems to build your collection
- Update regularly to keep content fresh

## Next Steps

1. **Customize everything** - Make it truly yours!
2. **Deploy to Vercel** - One-click and you're live!
3. **Share the link** - Add to your portfolio and social media
4. **Keep creating** - Add more poems over time
5. **Engage your audience** - Share behind-the-scenes stories

---

**Questions?** Refer to:
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)

**You've got this!** 🚀✨
