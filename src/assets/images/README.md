# 🖼 Image Assets — How to Add Your Photos

This folder holds all images used in the portfolio.
Replace the placeholder filenames below with your actual photos.

---

## Profile Photo

**File:** `avatar.jpg`
**Used in:** About section (left column, circular crop)
**Recommended:** Square photo, min 400×400px, `.jpg` or `.png`

```
src/assets/images/avatar.jpg   ← drop your photo here
```

---

## Work & Explorations Covers

These appear as cover images on the project cards.

| Filename     | Project              | Recommended size |
|--------------|----------------------|-----------------|
| `work-1.jpg` | Campus Event App     | 600×400px       |
| `work-2.jpg` | Library Seat Finder  | 600×400px       |
| `work-3.jpg` | Peer Study Matcher   | 600×400px       |

Can be screenshots, mockup images, or any relevant visual.

---

## Figma Exploration Covers

These appear in the Figma section grid.

| Filename      | Exploration              | Recommended size |
|---------------|--------------------------|-----------------|
| `figma-1.jpg` | Onboarding Redesign      | 600×380px       |
| `figma-2.jpg` | Dashboard Layout Study   | 600×380px       |
| `figma-3.jpg` | Checkout Flow Concept    | 600×380px       |
| `figma-4.jpg` | Notification System Audit| 600×380px       |

Export your Figma frames as PNG/JPG and drop them here.

---

## Tips

- Use `.jpg` for photos, `.png` for screenshots with transparency
- Keep file sizes under 500KB for fast load times
- If you rename files, update the import in the matching data file
  e.g. `src/data/figmaWork.js` has `image: figma1` — update that import

---

## No image yet?

The components gracefully fall back to a **hatched placeholder pattern**
if the image file is missing or the import returns null.
So you can build and run the site before adding photos.
