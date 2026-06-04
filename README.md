# Varshini — Portfolio

A clean, minimal, dark-mode portfolio built with **React + Tailwind CSS**.
Positioned as a product thinker: analytical, honest, curiosity-driven.

---

## 🗂 Project Structure

```
varshini-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── README.md          ← instructions for adding your photos
│   │       ├── avatar.jpg         ← your profile photo (replace this)
│   │       ├── work-1.jpg         ← project 1 cover (replace this)
│   │       ├── work-2.jpg         ← project 2 cover (replace this)
│   │       ├── work-3.jpg         ← project 3 cover (replace this)
│   │       ├── figma-1.jpg        ← figma exploration 1 (replace this)
│   │       ├── figma-2.jpg        ← figma exploration 2 (replace this)
│   │       ├── figma-3.jpg        ← figma exploration 3 (replace this)
│   │       └── figma-4.jpg        ← figma exploration 4 (replace this)
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── WorkExplorations.jsx
│   │   ├── FigmaExplorations.jsx
│   │   ├── Observations.jsx
│   │   ├── Skills.jsx
│   │   ├── Leadership.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── Label.jsx
│   │       ├── Grain.jsx
│   │       └── CornerCard.jsx
│   ├── data/
│   │   ├── explorations.js
│   │   ├── figmaWork.js
│   │   ├── observations.js
│   │   ├── skills.js
│   │   └── leadership.js
│   ├── hooks/
│   │   └── useInView.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 🖼 Adding Your Images

See `src/assets/images/README.md` for step-by-step image instructions.

**Quick guide:**
- Drop your **profile photo** in `src/assets/images/avatar.jpg`
- Drop **project screenshots** in `src/assets/images/work-1.jpg`, `work-2.jpg`, `work-3.jpg`
- Drop **Figma screenshots** in `src/assets/images/figma-1.jpg` through `figma-4.jpg`

Any `.jpg`, `.png`, or `.webp` works — just keep the filenames consistent.

---

## ✏️ Editing Content

All content lives in `src/data/`. No need to touch component files:

| File | What it controls |
|------|-----------------|
| `explorations.js` | Work & Explorations cards |
| `figmaWork.js` | Figma section cards |
| `observations.js` | Observations & Thinking section |
| `skills.js` | Skill groups + percentages |
| `leadership.js` | Leadership / Experience cards |

Edit those files to update any text, percentages, or add new entries.

---

## 🌐 Live Site

The portfolio is deployed to GitHub Pages and is accessible at:
https://anny-11.github.io/Portfolio/

