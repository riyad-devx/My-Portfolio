# Tamim Mia Riyad – Developer Portfolio Website

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed in a premium dark navy aesthetic with violet and subtle cyan gradient accents, responsive mobile drawer navigation, dynamic project details pages, accessible contrast, and zero external runtime dependencies.

---

## 🚀 Live Projects & Repositories
- **Bazar Dor (বাজার দর):** [Live Demo](https://bazar-dor-ecru-psi.vercel.app/) • [GitHub Repository](https://github.com/riyad-devx/Bazar-Dor)
- **FitLog Tracker:** [Live Demo](https://my-fit-log-project-11nn.vercel.app/) • [GitHub Repository](https://github.com/riyad-devx/my-fit-log-project)
- **Bangla News 24 (বাংলা নিউজ ২৪):** [Live Demo](https://bangla-news-24-eight-kohl.vercel.app/) • [GitHub Repository](https://github.com/riyad-devx/Bangla-News-24)
- **Developer GitHub Profile:** [https://github.com/riyad-devx](https://github.com/riyad-devx)

---

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router with Partial Prerendering & Static Generation)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Icons:** React Icons (`react-icons/si`, `react-icons/fa`, `react-icons/vsc`, `react-icons/tb`) & Lucide Icons
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
│   ├── Skills.tsx               # Categorized skills with official brand technology icons
│   ├── Education.tsx            # Diploma in CST at Moulvibazar Polytechnic
│   ├── ProjectsSection.tsx      # Projects filter grid & GitHub banner
│   ├── ProjectCard.tsx          # Card with visual banner, status & detail links
│   ├── ContactSection.tsx       # Direct contact cards (Email, Tel, WhatsApp) & message form
│   ├── Footer.tsx               # Dark footer with navigation & Back to Top
│   └── Icons.tsx                # Dedicated SVG icons (GitHub, LinkedIn)
├── data/
│   ├── personal.ts              # Centralized personal info, skills & education data
│   └── projects.ts              # Structured project profiles (Bazar Dor, FitLog, Bangla News 24)
└── public/
    └── images/
        ├── avatar-placeholder.svg # Sleek developer avatar SVG fallback
        ├── bazar-dor.svg          # Bazar Dor UI preview banner
        ├── fitlog.svg             # FitLog tracker preview banner
        └── bangla-news-24.svg     # Bangla News 24 preview banner
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
Generates statically optimized pages for all routes (`/`, `/projects/bazar-dor`, `/projects/fitlog`, `/projects/bangla-news-24`, `/robots.txt`, `/sitemap.xml`).

### 4. Code Quality & Linting
```bash
npm run lint
```
