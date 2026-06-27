# Akmal — Portfolio

A light, minimal, code-editor-inspired portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Going live (free)

1. **Push this to GitHub** (you have an account at github.com/MAkmal01):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/MAkmal01/akmal-portfolio.git
   git push -u origin main
   ```
   (Create the empty repo on github.com first — New repository → name it
   `akmal-portfolio` → don't initialize with a README → Create.)

2. **Deploy on Vercel** (free, easiest option):
   - Go to vercel.com → sign up/log in with GitHub
   - "Add New" → "Project" → import the `akmal-portfolio` repo
   - It auto-detects Vite, click "Deploy"
   - You get a live link like `akmal-portfolio.vercel.app` in about a minute

   The `vercel.json` file in this project makes sure the Projects/Contact
   pages work correctly even when someone opens or refreshes those URLs
   directly.

   From then on, every time you push to GitHub, Vercel redeploys automatically.

   (Netlify works almost the same way if you'd rather use that instead.)

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs static files to `dist/`. You can deploy that folder anywhere static
(Vercel, Netlify, GitHub Pages, etc).

## Things to double check before you publish

- **Project source links** — all three projects' "Source code" buttons currently
  point to your GitHub profile (`https://github.com/MAkmal01`). Once you push each
  repo, update `src/pages/Projects.jsx` → that project's `source` field with the
  exact repo URL.
- **Employee Management System details** — I guessed Java + JDBC + MySQL and a
  standard CRUD feature set since you didn't specify. Check `src/pages/Projects.jsx`
  and correct anything that's wrong.
- **Resume link** — if you want a "Download CV" button anywhere, just say so and
  I'll wire it up once you upload the PDF.

## Structure

```
src/
  components/
    Nav.jsx       — top nav, styled like editor tabs
    Footer.jsx    — status-bar style footer
  pages/
    Home.jsx      — hero, about, skills, CTA
    Projects.jsx  — project cards (data-driven — edit the `projects` array)
    Contact.jsx   — contact info + mailto-based form
  index.css       — design tokens (colors, fonts) + shared component styles
```
