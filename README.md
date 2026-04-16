# Shubham Jawandhiya — Personal Site

A clean, maintainable static site built for GitHub Pages.
No build tools. No dependencies to install. Just files.

---

## File structure

```
.
├── index.html              ← Site shell (HTML only, no content logic)
│
├── css/
│   ├── tokens.css          ← Design tokens: colors, fonts, light/dark themes
│   ├── layout.css          ← Page layout: nav, hero, sections, footer
│   ├── components.css      ← UI components: cards, grids, buttons, photo grid
│   └── post.css            ← Blog post reader overlay + markdown styles
│
├── js/
│   ├── theme.js            ← Light/dark toggle with localStorage persistence
│   ├── blog.js             ← Blog grid renderer + post fetcher (POST_INDEX lives here)
│   ├── photography.js      ← Photo grid + lightbox (PHOTOS list lives here)
│   └── main.js             ← Scroll animations + active nav highlight
│
├── posts/
│   ├── TEMPLATE.md         ← Copy this to write a new post
│   ├── peter-thiel-question.md
│   ├── distributed-consensus.md
│   ├── social-influence-dialogue.md
│   ├── distributed-systems-papers.md
│   ├── frontend-engineering.md
│   ├── code-editors.md
│   ├── personal-recommendations.md
│   ├── random-ideas.md
│   └── llms-for-hiring.md
│
└── assets/                 ← (create this) for your photo, favicon, etc.
    └── photo.jpg           ← Optional: your portrait for the About section
```

---

## Deploy to GitHub Pages

1. Create a repo named `shubhamrj.github.io` (or use your existing one)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source**: `main` branch, `/ (root)` folder
4. Live at `https://shubhamrj.github.io`

---

## Writing a new blog post

### Step 1 — Create the markdown file

Copy `posts/TEMPLATE.md` to `posts/your-post-slug.md` and write your content.

The slug is the filename without `.md`. Use lowercase, hyphens, no spaces.

```bash
cp posts/TEMPLATE.md posts/my-new-idea.md
```

### Step 2 — Add it to the index

Open `js/blog.js` and add an entry at the top of `POST_INDEX`:

```js
{
  id:       'my-new-idea',       // must match your filename (without .md)
  title:    'My New Idea',
  date:     'Apr 15, 2026',
  category: 'Ideas',
  featured: false,               // set true to make it the big featured card
  excerpt:  'One sentence shown on the card.',
},
```

That's it. The post will appear in the grid and be fetched from `posts/my-new-idea.md`
when a reader clicks it.

---

## Adding photos

Photos are served from your existing photography repo at:
`https://shubhamrj.github.io/photography/images/`

To add a new photo:
1. Push the image to `/photography/images/thumbs/` and `/photography/images/fulls/`
   in your `shubhamrj.github.io` repo
2. Open `js/photography.js` and add the filename to the `PHOTOS` array

```js
const PHOTOS = [
  'your-new-photo.jpg',   // ← add here
  '1000013634~3.jpg',
  // ...
];
```

---

## Adding your portrait photo

In `index.html`, find the `about-photo-placeholder` div and replace it:

```html
<!-- Before -->
<div class="about-photo-placeholder">
  <span class="initials">SJ</span>
</div>

<!-- After -->
<img class="about-photo" src="assets/photo.jpg" alt="Shubham Jawandhiya" />
```

Upload your photo to `assets/photo.jpg`.

---

## Customizing colors

All color values live in `css/tokens.css`. Edit the `:root` block for light mode
and the `[data-theme="dark"]` block for dark mode.

```css
:root {
  --accent: #c8462b;   /* ← change this to your preferred accent color */
  /* ... */
}
```

---

## Customizing fonts

In `index.html`, update the Google Fonts `<link>` tag to load different fonts,
then update the variables in `css/tokens.css`:

```css
:root {
  --serif: 'Your Serif Font', Georgia, serif;
  --mono:  'Your Mono Font', monospace;
  --sans:  'Your Sans Font', system-ui, sans-serif;
}
```

---

## Markdown features supported

Posts support full CommonMark Markdown via [marked.js](https://marked.js.org/):

- Headings `# ## ###`
- **Bold**, *italic*, `inline code`
- [Links](https://example.com)
- > Blockquotes
- Unordered and ordered lists
- Code blocks with triple backticks (``` ``` ```)
- Tables
- Horizontal rules `---`
