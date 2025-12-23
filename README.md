# Next.js Student Exercises - Module 6

This project contains implementations for all four exercises from Module 6: Advanced Next.js Framework Architecture and Application.

## Setup Instructions

### 1. Install Dependencies

First, copy the `.env.example` file to `.env.local`:

```bash
copy .env.example .env.local
```

Then install the dependencies:

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Exercise 1: Dynamic Blog System (Pages Router & SSG)

### Location

- Homepage: `/` (uses Pages Router)
- Blog posts: `/blog/[id]`
- Data file: `data.json`

### Features Implemented

- ✅ `data.json` with 5 blog posts
- ✅ Index page with `getStaticProps` to list all posts
- ✅ Dynamic route `/blog/[id]` with `getStaticPaths`
- ✅ `fallback: true` for handling new posts

### Testing Fallback Behavior

1. Run `npm run dev` and visit `http://localhost:3000/blog`
2. Click on any blog post to verify they work
3. **To test fallback:**
   - Open `data.json`
   - Add a 6th post:
     ```json
     {
       "id": "6",
       "title": "New Post Title",
       "content": "This is a new post added manually."
     }
     ```
   - **Without restarting the server**, visit `http://localhost:3000/blog/6`
   - You should see "Loading..." briefly, then the content appears
   - This demonstrates ISR (Incremental Static Regeneration)

---

## Exercise 2: Dashboard with Hybrid Rendering (App Router)

### Location

- Dashboard: `/dashboard`
- Files:
  - `app/dashboard/layout.tsx` - Server Component with sidebar
  - `app/dashboard/page.tsx` - Server Component with async data
  - `app/dashboard/SettingsToggle.tsx` - Client Component

### Features Implemented

- ✅ Static sidebar navigation (Server Component)
- ✅ User profile data fetched with 2-second delay using `setTimeout`
- ✅ Settings toggle (Client Component) with `useState` for dark/light mode
- ✅ Demonstrates embedding Client Component inside Server Component

### How to Test

1. Navigate to `http://localhost:3000/dashboard`
2. Notice the 2-second loading time for user profile data
3. Click "Toggle to Dark Mode" button
4. Observe the theme changes (this is client-side interactivity)
5. The sidebar remains static (Server Component)

---

## Exercise 3: API Route & Middleware

### Location

- API Route: `/api/secret`
- Middleware: `middleware.ts`
- Environment: `.env.local`

### Features Implemented

- ✅ API route returns `{ secret: "Next.js is cool" }`
- ✅ Middleware checks for `x-api-key` header
- ✅ Returns 401 if header is missing or incorrect

### Testing with curl

**Without API Key (Should fail with 401):**

```bash
curl http://localhost:3000/api/secret
```

**With Correct API Key (Should succeed):**

```bash
curl -H "x-api-key: my-super-secret-key-12345" http://localhost:3000/api/secret
```

**With Wrong API Key (Should fail with 401):**

```bash
curl -H "x-api-key: wrong-key" http://localhost:3000/api/secret
```

### Testing in Browser

For browser testing, you can use the browser's DevTools console:

```javascript
// Without header (will fail)
fetch("/api/secret")
  .then((r) => r.json())
  .then(console.log);

// With correct header (will succeed)
fetch("/api/secret", {
  headers: { "x-api-key": "my-super-secret-key-12345" },
})
  .then((r) => r.json())
  .then(console.log);
```

---

## Exercise 4: Image & Font Optimization

### Location

- Demo page: `/` (App Router homepage)
- Image: `public/hero-image.svg`
- Font config: `app/layout.tsx`

### Features Implemented

- ✅ High-resolution image in `public/` folder
- ✅ Side-by-side comparison of `<img>` vs `<Image />`
- ✅ Google Font (Inter) loaded via `next/font/google`
- ✅ Self-hosted fonts (no external requests)

### How to Observe Layout Shift (CLS)

1. Open `http://localhost:3000` in Chrome
2. Open DevTools (F12)
3. Click **Performance** tab
4. Click **Record** (circle icon)
5. Reload the page
6. Stop recording
7. Look for **"Cumulative Layout Shift"** in the summary
8. The standard `<img>` may cause shift, but `<Image />` prevents it

### Font Self-Hosting Verification

1. Open `http://localhost:3000`
2. Open DevTools → **Network** tab
3. Filter by "Font" or search for "google"
4. Verify **NO requests** to `fonts.googleapis.com`
5. Font files are served from the same domain
6. Check the `<head>` section - fonts are inlined at build time

---

## Project Structure

```
nextjs-exercises/
├── app/                      # App Router (Next.js 13+)
│   ├── layout.tsx           # Root layout with font config
│   ├── page.tsx             # Homepage (Exercise 4 demo)
│   ├── globals.css          # Global styles
│   ├── dashboard/           # Exercise 2
│   │   ├── layout.tsx       # Dashboard layout with ThemeProvider
│   │   ├── page.tsx         # Home - Server Component with async data
│   │   ├── ThemeContext.tsx # Context API for global theme
│   │   ├── SettingsToggle.tsx # Client Component for theme toggle
│   │   ├── analytics/
│   │   │   └── page.tsx     # Analytics page
│   │   ├── reports/
│   │   │   └── page.tsx     # Reports page
│   │   └── settings/
│   │       └── page.tsx     # Settings page
│   └── api/
│       └── secret/
│           └── route.ts     # API route (Exercise 3)
├── pages/                   # Pages Router (legacy)
│   ├── _document.js         # Custom HTML document
│   └── blog/
│       ├── index.js         # Blog list (Exercise 1)
│       └── [id].js          # Dynamic blog post route
├── public/
│   └── hero-image.svg      # Large image for optimization demo
├── middleware.ts           # API protection (Exercise 3)
├── data.json               # Blog posts data (Exercise 1)
├── .env.example            # Environment template
└── package.json
```

---

## Key Concepts Demonstrated

### Exercise 1

- **Static Site Generation (SSG)** with `getStaticProps`
- **Dynamic Routes** with `getStaticPaths`
- **Fallback behavior** (`fallback: true`)
- **Incremental Static Regeneration (ISR)**

### Exercise 2

- **Server Components** (default in App Router)
- **Client Components** (`'use client'` directive)
- **Context API** for global state management
- **Component composition** (Client inside Server, ThemeProvider pattern)
- **Async data fetching** on the server
- **Nested routing** in App Router
- **usePathname** for navigation state

### Exercise 3

- **API Routes** in App Router (`route.ts`)
- **Middleware** for request interception
- **Header-based authentication**
- **Environment variables** (`.env.local`)

### Exercise 4

- **Image optimization** with `next/image`
- **Layout shift prevention** (CLS)
- **Font optimization** with `next/font/google`
- **Self-hosted fonts** (no external requests)
- **Core Web Vitals** improvement

---

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Module Not Found

Make sure you've installed dependencies:

```bash
npm install
```

### Environment Variables Not Working

Restart the dev server after creating/modifying `.env.local`:

```bash
# Stop the server (Ctrl+C)
npm run dev
```

---

## Learning Outcomes

After completing these exercises, you should understand:

1. The difference between **SSG**, **SSR**, and **ISR**
2. How **Pages Router** differs from **App Router**
3. When to use **Server Components** vs **Client Components**
4. How to secure **API routes** with **middleware**
5. How to optimize **images** and **fonts** for better Core Web Vitals

---

## Next Steps

- Deploy to Vercel: `npx vercel`
- Add more blog posts and test ISR behavior
- Experiment with different rendering strategies
- Try building the project: `npm run build`

Happy learning! 🚀
