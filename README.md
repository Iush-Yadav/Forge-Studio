<div align="center">

<br/>

```
███████╗ ██████╗ ██████╗  ██████╗ ███████╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
█████╗  ██║   ██║██████╔╝██║  ███╗█████╗      ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝      ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝
```

### *Turning invisible local businesses into trusted online brands.*

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Babel](https://img.shields.io/badge/Babel-Standalone-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io)
[![EmailJS](https://img.shields.io/badge/EmailJS-Reviews-FF6B35?style=for-the-badge&logo=gmail&logoColor=white)](https://emailjs.com)
[![Zero Build](https://img.shields.io/badge/Build_Step-None-C8FF00?style=for-the-badge&logo=lightning&logoColor=black)](#)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#license)

<br/>

> **No bundler. No npm. No build step.**
> Two files. Drop on any host. Live in minutes.

<br/>

</div>

---

<br/>

## ◈ Overview

**forge.studio** is a single-page business portfolio built entirely without a build pipeline. React 18 and Babel run via CDN — the entire app lives in two files you can drag onto Netlify and ship today.

Designed for Indian local business owners who need to look world-class online. Dark aesthetic. Sharp typography. Conversion-focused layout.

<br/>

---

<br/>

## ◈ Architecture

```
forge-studio/
│
├── 📄  index.html        ← Shell: loads React + Babel CDN, mounts app
└── ⚛️   portfolio.jsx     ← Everything: components, styles, data, logic
```

> **Why two files?**
> Clients can update their own copy without touching a terminal. No `node_modules`. No Webpack config. Pure browser runtime.

<br/>

---

<br/>

## ◈ Page Sections

<br/>

<div align="center">

| # | Section | Scroll ID | What It Does |
|:-:|---|---|---|
| 01 | **Hero** | `#top` | Full-screen intro · parallax large-type · "Available for Work" badge |
| 02 | **Marquee Band** | — | Infinite animated ticker of services |
| 03 | **Why Us** | `#why` | 3-column social proof stats |
| 04 | **Services** | `#work` | 6 interactive service rows with hover reveals |
| 05 | **Process** | `#process` | Accordion timeline of the client journey |
| 06 | **Reviews** | `#testimonials` | Live review form → emailed directly to owner |
| 07 | **Pricing** | `#pricing` | Starter · Professional · Growth cards |
| 08 | **FAQ** | `#faq` | Expandable accordion |
| 09 | **Contact** | `#contact` | Lead capture · budget selector · WhatsApp link |

</div>

<br/>

---

<br/>

## ◈ Feature Highlights

<br/>

<table>
<tr>
<td width="50%">

### 🎯 &nbsp;Conversion Features
- Lead capture form with budget dropdown
- WhatsApp floating pill button
- Sticky CTA in navbar
- Pricing cards with direct contact CTAs
- Review form → your inbox via EmailJS

</td>
<td width="50%">

### ✨ &nbsp;Design & Motion
- Custom cursor — lime dot + lagging ring
- Branded percentage loader on first visit
- Scroll-triggered fade-up reveals
- Transparent → frosted-glass navbar on scroll
- Film grain SVG overlay

</td>
</tr>
<tr>
<td width="50%">

### ⚡ &nbsp;Performance
- Zero dependencies installed locally
- No JS bundle to build or cache-bust
- Fonts via Google Fonts CDN
- Images: emoji-based (zero image requests)
- `IntersectionObserver` for lazy reveals

</td>
<td width="50%">

### 📱 &nbsp;Responsive
- CSS Grid with `clamp()` fluid sizing
- Mobile hamburger menu with animated bars
- Stacked layouts at `< 768px`
- Service rows hide descriptions on small screens
- Hero stats stack vertically on `< 640px`

</td>
</tr>
</table>

<br/>

---

<br/>

## ◈ Customisation

All brand variables live at the **very top** of `portfolio.jsx` — one edit updates the whole site:

```js
// ── Contact ────────────────────────────────────────────────
const WA_NUMBER  = "919153947946";          // WhatsApp (country code, no +)
const EMAIL      = "contact.iush27@gmail.com";
const PHONE_DISP = "+91 91539 47946";       // How it shows on screen
const PHONE_LINK = "tel:+919153947946";     // Actual tel: href

// ── Colors ─────────────────────────────────────────────────
const CREAM = "#f0ece4";    // Primary text
const BLACK = "#0a0a0a";    // Page background
const LIME  = "#c8ff00";    // Accent / CTA / highlights
const GREY  = "#151515";    // Card backgrounds
```

<br/>

---

<br/>

## ◈ Review Form — EmailJS Setup

The **Reviews** section collects visitor feedback and fires it straight to your inbox. Free tier covers 200 emails/month.

<br/>

**Step 1 — Sign up**

→ [emailjs.com](https://www.emailjs.com) · Create a free account

<br/>

**Step 2 — Connect your email**

Dashboard → *Email Services* → *Add New Service* → connect Gmail
Copy your **`SERVICE_ID`**

<br/>

**Step 3 — Create a template**

Dashboard → *Email Templates* → *Create New Template*

Use these variables in the template body:

```
Reviewer:  {{from_name}}
Business:  {{from_business}}
Rating:    {{rating}}
Review:    {{message}}
```

Copy your **`TEMPLATE_ID`**

<br/>

**Step 4 — Get your Public Key**

*Account* → *API Keys* → copy **`PUBLIC_KEY`**

<br/>

**Step 5 — Paste into the code**

Find the `handleSubmit` function inside `Testimonials()` in `portfolio.jsx`:

```js
body: JSON.stringify({
  service_id:  "YOUR_SERVICE_ID",    // ← replace
  template_id: "YOUR_TEMPLATE_ID",   // ← replace
  user_id:     "YOUR_PUBLIC_KEY",    // ← replace
  ...
})
```

✅ &nbsp;Done. Every star rating + review text lands in your inbox instantly.

<br/>

---

<br/>

## ◈ Deployment

<br/>

### ▸ Netlify &nbsp;`(Recommended — free)`

```
1. Push this repo to GitHub
2. netlify.com → Add new site → Import from Git
3. Build command:   (leave empty)
   Publish directory:  /  (root)
4. Deploy site
```

<br/>

### ▸ GitHub Pages

```
Repo → Settings → Pages
Source: main branch · / (root)
```

Your site will be live at:
```
https://yourusername.github.io/repo-name
```

<br/>

### ▸ Vercel

```bash
npx vercel
# Select repo root · No framework preset
```

<br/>

### ▸ Manual / cPanel

Upload both files to `public_html`. That's it.

<br/>

---

<br/>

## ◈ Pricing Plans

<div align="center">

| Plan | Price | Pages | Delivery | Support |
|---|:-:|:-:|:-:|---|
| **Starter** | ₹10,000 | 3–5 | 7 days | Email |
| **Professional** ⭐ | ₹30,000 | 8–12 | 14 days | 6 months priority |
| **Growth** | ₹60,000 | Unlimited | 21 days | 1 year · 24/7 |

</div>

To edit plans, update the `PLANS` array in `portfolio.jsx`.

<br/>

---

<br/>

## ◈ Tech Stack

<div align="center">

| Technology | Version | Purpose |
|---|:-:|---|
| [React](https://react.dev) | 18 | UI components & state |
| [Babel Standalone](https://babeljs.io) | Latest | JSX → JS in browser |
| [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | — | Display / editorial headings |
| [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) | — | Labels, nav, stats |
| [Barlow](https://fonts.google.com/specimen/Barlow) | — | Body copy |
| [EmailJS](https://emailjs.com) | v1 | Review form → email delivery |

</div>

<br/>

---

<br/>

## ◈ Contact

<div align="center">

**forge.studio**

📧 &nbsp;[contact.iush27@gmail.com](mailto:contact.iush27@gmail.com)
&nbsp;&nbsp;·&nbsp;&nbsp;
📞 &nbsp;[+91 91539 47946](tel:+919153947946)
&nbsp;&nbsp;·&nbsp;&nbsp;
💬 &nbsp;[WhatsApp](https://wa.me/919153947946)

*Mon – Sat &nbsp;·&nbsp; 9 am – 7 pm IST*

</div>

<br/>

---

<br/>

## ◈ License

```
© 2024 forge.studio · All Rights Reserved

This codebase is proprietary. No part of this project may be copied,
modified, redistributed, or used commercially without explicit written
permission from forge.studio.
```

<br/>

---

<div align="center">

<br/>

*Crafted with obsession.*

`forge.studio`

</div>
