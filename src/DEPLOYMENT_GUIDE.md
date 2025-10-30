# Deployment Guide - Long Distance Relationship Website

This guide will walk you through deploying your website from Figma Make to a live website using Vite and Vercel.

## Prerequisites

Before you begin, make sure you have:
- Node.js installed (version 18 or higher) - [Download here](https://nodejs.org/)
- A GitHub account (free) - [Sign up here](https://github.com/)
- A Vercel account (free) - [Sign up here](https://vercel.com/)
- Git installed on your computer - [Download here](https://git-scm.com/)

## Step 1: Setup Your Local Vite Project

1. **Create a new Vite project with React and TypeScript:**

   Open your terminal/command prompt and run:
   ```bash
   npm create vite@latest my-ldr-website -- --template react-ts
   cd my-ldr-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install required packages:**
   ```bash
   npm install tailwindcss@next @tailwindcss/vite@next
   npm install class-variance-authority clsx tailwind-merge
   npm install lucide-react
   npm install recharts@2.15.2
   npm install leaflet react-leaflet
   npm install @types/leaflet
   npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-tooltip
   npm install embla-carousel-react
   npm install react-day-picker date-fns
   npm install sonner@2.0.3
   npm install vaul cmdk input-otp
   ```

## Step 2: Setup Tailwind CSS v4

1. **Update `vite.config.ts`:**
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'
   import path from 'path'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
   })
   ```

2. **Create/Update `src/index.css`:**
   Copy the contents from your `styles/globals.css` file.

3. **Update `src/main.tsx`:**
   ```typescript
   import { StrictMode } from 'react'
   import { createRoot } from 'react-dom/client'
   import './index.css'
   import App from './App.tsx'

   createRoot(document.getElementById('root')!).render(
     <StrictMode>
       <App />
     </StrictMode>,
   )
   ```

## Step 3: Copy Your Files

1. **Copy all your component files:**
   - Copy everything from your Figma Make project's `/components` folder to `src/components`
   - Copy `App.tsx` to `src/App.tsx`
   - Copy `styles/globals.css` content to `src/index.css`

2. **Update import paths in your files:**
   
   Replace all imports that start with `./components/` with `@/components/`
   Replace all imports that start with `./styles/` with relative paths

   For example:
   ```typescript
   // Change this:
   import { Button } from "./components/ui/button";
   
   // To this:
   import { Button } from "@/components/ui/button";
   ```

## Step 4: Add Missing Files

Create `src/components/ui/utils.ts` if it doesn't exist:
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Step 5: Test Locally

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Go to `http://localhost:5173` to see your website running locally.

3. **Fix any errors:**
   If you see any errors in the console, check:
   - Import paths are correct
   - All dependencies are installed
   - TypeScript errors are resolved

## Step 6: Setup Git Repository

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Long Distance Relationship Website"
   ```

2. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., "ldr-website")
   - Don't initialize with README

3. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ldr-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 7: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Go to [Vercel](https://vercel.com/) and sign in**

2. **Click "Add New Project"**

3. **Import your GitHub repository:**
   - Select "Import Git Repository"
   - Choose your repository from the list
   - Click "Import"

4. **Configure your project:**
   - Framework Preset: Vite
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `dist` (should be auto-detected)

5. **Click "Deploy"**

6. **Wait for deployment to complete** (usually 1-2 minutes)

7. **Your website is live!** Vercel will give you a URL like: `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Setup and deploy? Y
   - Which scope? Choose your account
   - Link to existing project? N
   - What's your project's name? (enter a name)
   - In which directory is your code located? ./
   - Want to override settings? N

4. **Your website is now deployed!**

## Step 8: Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" > "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

## Updating Your Website

After making changes:

1. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

2. **Vercel will automatically redeploy** your website (usually within 1-2 minutes)

## Troubleshooting

### TypeScript Errors

If you encounter TypeScript errors:
- Make sure your `chart.tsx` file has been updated with the fixes
- Check that all import paths are correct
- Run `npm run build` to see detailed errors

### Build Failures

If the build fails on Vercel:
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Ensure there are no TypeScript errors locally

### Images Not Loadingg

If images don't load:
- Make sure you're using the `ImageWithFallback` component
- Check that image URLs are accessible
- For local images, make sure they're in the `public` folder

### Map Not Showing

If the Leaflet map isn't working:
- Make sure you have the Leaflet CSS imported
- Add to your `index.html` in the `<head>`:
  ```html
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  ```

## Cost

- **GitHub:** Free
- **Vercel:** Free for personal projects (includes SSL, CDN, automatic deployments)
- **Custom Domain:** $10-15/year (optional)

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Check your browser console for errors
3. Verify all files were copied correctly
4. Ensure all dependencies are installed

---

Congratulations! Your long-distance relationship website should now be live and accessible to anyone with the URL. Share it with your partner! ❤️
