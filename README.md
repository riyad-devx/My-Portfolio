# Riyad Mia – Developer Portfolio Website

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed in a premium dark navy aesthetic with violet and subtle cyan gradient accents, responsive mobile drawer navigation, dynamic project details pages, accessible contrast, and zero external runtime dependencies.

---

## 🚀 Live Demo & Repository
- **Bazar Dor Live Project:** [https://bazar-dor-ecru-psi.vercel.app/](https://bazar-dor-ecru-psi.vercel.app/)
- **Bazar Dor Repository:** [https://github.com/riyad-devx/Bazar-Dor](https://github.com/riyad-devx/Bazar-Dor)
- **Developer GitHub:** [https://github.com/riyad-devx](https://github.com/riyad-devx)

---

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router with Partial Prerendering & Static Generation)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide Icons & Custom SVG Icon components
- **Deployment:** Deployment-ready for Vercel (no secret env variables required)

---

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Custom dark navy theme, gradients & glassmorphism
│   ├── layout.tsx               # Root layout with SEO metadata & Geist fonts
│   ├── page.tsx                 # Homepage assembling all portfolio sections
│   ├── not-found.tsx            # Custom 404 error page
│   ├── robots.ts                # SEO robots.txt generator
│   ├── sitemap.ts               # Dynamic sitemap generator
│   └── projects/
│       └── [slug]/
│           └── page.tsx         # Dynamic project showcase page (generateStaticParams)
├── components/
│   ├── Navbar.tsx               # Responsive navbar with desktop & mobile drawer
│   ├── Hero.tsx                 # Hero section with status pill, CTAs & profile area
│   ├── ProfileImage.tsx         # Photo wrapper with fallback to avatar-placeholder.svg
│   ├── ResumeNoticeModal.tsx    # Accessible modal explaining resume status
│   ├── About.tsx                # Truthful learning journey & 4 core attributes
│   ├── Skills.tsx               # Categorized skills (Frontend, Backend, DB, Tools)
│   ├── Education.tsx            # Diploma in CST at Moulvibazar Polytechnic
│   ├── Experience.tsx           # Project-based learning & practical experience
│   ├── ProjectsSection.tsx      # Projects filter grid & GitHub banner
│   ├── ProjectCard.tsx          # Card with visual banner, status & detail links
│   ├── ContactSection.tsx       # Direct contact cards (Email, Tel, WhatsApp) & message form
│   ├── Footer.tsx               # Dark footer with navigation & Back to Top
│   └── Icons.tsx                # Dedicated SVG icons (GitHub, LinkedIn)
├── data/
│   ├── personal.ts              # Centralized personal info, skills & education data
│   └── projects.ts              # Structured project profiles & metadata
└── public/
    └── images/
        ├── avatar-placeholder.svg # Sleek developer avatar SVG fallback
        ├── bazar-dor.svg          # Bazar Dor UI preview banner
        ├── user-crud.svg          # User CRUD dashboard preview banner
        └── fitlog.svg             # FitLog tracker preview banner
```

---

## 🖼️ How to Add Your Own Photo & Project Images

1. **Profile Photo:**
   - Drop your real photo into the `public/` directory named exactly `profile.jpg` (`public/profile.jpg`).
   - The application automatically attempts to load `/profile.jpg`. If the file is not yet present, it gracefully displays the custom SVG monogram placeholder (`/images/avatar-placeholder.svg`) with zero layout shift or broken images.
2. **Project Images:**
   - Place project screenshots in `public/images/` and update the `image` path in `data/projects.ts`.

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build
```bash
npm run build
```
Generates statically optimized pages for all routes (`/`, `/projects/bazar-dor`, `/projects/user-management-crud`, `/projects/fitlog`, `/robots.txt`, `/sitemap.xml`).

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 🚢 Push to GitHub & Deploy on Vercel

### Step 1: Commit and Push to GitHub
```bash
git add .
git commit -m "feat: complete responsive developer portfolio website"
git branch -M main
git remote add origin https://github.com/riyad-devx/portfolio.git   # Replace with your repo URL
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import your portfolio repository.
4. Leave build settings as default (Framework: **Next.js**, Build Command: `next build`).
5. Click **"Deploy"**. The site will deploy in under 1 minute without any required environment variables.
