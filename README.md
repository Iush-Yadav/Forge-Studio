<div align="center">

```text
    _____                    _____ _           _ _       
   |  ___|__  _ __ __ _ ___ /  ___| |___ _   _| (_) ___  
   | |_ / _ \| '__/ _` / _ \\ `--.| __/ | | | | | |/ _ \ 
   |  _| (_) | | | (_| |  __/`--. \ || |_| |_| | | | (_) |
   |_|  \___/|_|  \__, |\___|\____/\__\__|\__,_|_|_|\___/ 
                  |___/                                  
```

**Production website for forge.studio — a modern web studio for local businesses.**
Built with cutting-edge tools to deliver blazing fast and stunning experiences.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
</p>

</div>

---

<div align="center">

```text
 _____________________________________________________
|                                                     |
|    _____________________________________________    |
|   |                                             |   |
|   |  > npm install                              |   |
|   |  > cp .env.example .env.local               |   |
|   |  > npm run dev                              |   |
|   |                                             |   |
|   |  Starting server on http://localhost:3000   |   |
|   |  Ready in 1.2s...                           |   |
|   |_____________________________________________|   |
|                                                     |
 \___________________________________________________/
        \___________________________________/
      _________________________________________
     /_________________________________________\
```

</div>

## 🚀 Quick Start

Get the local development server up and running in a few simple steps:

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables (fill in values later)
cp .env.example .env.local

# 3. Start the dev server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the studio live!

---

## 📬 Contact & Review Forms

Forms are configured to work **out of the box with no API key** required, powered by [FormSubmit.co](https://formsubmit.co).
Submissions will be automatically emailed to the address specified in `lib/constants.js` (`EMAIL`).

> ⚠️ **IMPORTANT ONE-TIME STEP:**  
> The very first form submission will trigger a confirmation email from FormSubmit to your designated address. Click the activation link in that email to authorize the domain. After this single step, all future submissions will be delivered silently and automatically.

---

## ⚙️ Environment Variables

Create and configure your `.env.local` file with the following variables (all are optional but recommended):

| Variable | Required | What it does |
|:---|:---:|:---|
| `CONTACT_EMAIL` | Optional | Where form submissions are emailed. Defaults to the `EMAIL` in `lib/constants.js`. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Your live domain, e.g., `https://forge.studio`. Crucial for canonical URLs, sitemap, and OG metadata tags. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Set to your domain to enable privacy-friendly [Plausible](https://plausible.io) analytics. Leave blank to disable. |

---

## 🛠️ Scripts Directory

| Command | Action |
| :--- | :--- |
| `npm run dev` | Spins up the local development server with hot-reloading |
| `npm run build` | Compiles a highly-optimized production build |
| `npm start` | Serves the production build generated from the previous step |

---

## ☁️ Deployment

Ready to go live? We recommend deploying to [Vercel](https://vercel.com) for the best Next.js experience:

1. **Push** this repository to a Git provider (GitHub, GitLab, Bitbucket).
2. **Import** the repository in your Vercel dashboard.
3. **Configure** the environment variables matching your `.env.local`.
4. **Deploy** and point your custom domain at it!

---

## 📂 Project Architecture

```text
forge-studio/
├── app/                  # App Router: Layouts, Pages, API routes, Metadata
│   ├── sitemap.js        # Dynamic SEO sitemap
│   ├── robots.js         # SEO robots directive
│   ├── opengraph-image.js# Dynamic OpenGraph generation
│   └── icon.svg          # Favicon
├── components/           # Reusable UI Components
│   ├── Hero/             # 3D/Interactive Hero sections
│   ├── Content/          # Main informational sections
│   └── Engage/           # Interactive engagement/contact UI
└── lib/                  # Utilities & Constants
    ├── constants.js      # Global config: brand, contact, and content data
    └── icons.jsx         # Custom SVG icon library
```

---

## 📝 Content Philosophy

- **Capabilities:** We showcase exactly what we *can build* for different business archetypes. No fabricated case studies.
- **Reviews:** A system allowing real visitors to submit ratings and their experience directly to your email. We display authentic testimonials over invented ones.
- **Customization:** Easily update your studio's contact details, pricing structure, and copywriting from a single source of truth: `lib/constants.js`.

<div align="center">
<br/>
<i>Built with ❤️ by Forge Studio</i>
</div>
