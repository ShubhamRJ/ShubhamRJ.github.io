/* ─── blog.js ────────────────────────────────────────────────────────────────
   To add a new post:
     1. Create posts/your-slug.md with a frontmatter block (see TEMPLATE.md)
     2. Add 'your-slug.md' to POSTS below — newest first
     Done. Title, date, category, excerpt all come from the file's frontmatter.
   ─────────────────────────────────────────────────────────────────────────── */

// ─── POST FILENAMES ──────────────────────────────────────────────────────────
// This is the only thing you maintain. Order here = display order (before date sort).
// Metadata comes from each file's frontmatter — nothing else to update.
const POSTS = [
  'my-answer-to-peter-thiels-question.md',
  'the-art-of-frontend-engineering.md',
  'distributed-consensus-where-is-it-used.md',
  'social-influence-dialogue-systems.md',
  'distributed-systems-papers-and-resources.md',
  'random-ideas-with-potential.md',
  'the-fantastic-engineering-of-code-editors.md',
  'llms-for-hiring.md',
  'duplication-on-social-media.md',
  'personal-recommendations.md',
  'carbon-footprint-of-emails.md',
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let ALL_POSTS    = [];
let visibleCount = 7;

// ─── FRONTMATTER PARSER ──────────────────────────────────────────────────────
function parseFrontmatter(raw) {
  const meta = { title: '', date: '', category: '', excerpt: '' };
  let body = raw;

  if (!raw.startsWith('---')) return { meta, body };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { meta, body };

  const block = raw.slice(4, end);
  body = raw.slice(end + 4).trim();

  for (const line of block.split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
    if (key in meta) meta[key] = val;
  }

  return { meta, body };
}

// ─── DATE FORMATTER ──────────────────────────────────────────────────────────
function fmtDate(str) {
  const d = new Date(str + 'T00:00:00');
  if (isNaN(d)) return str;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ─── UTILS ───────────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── LOADER ──────────────────────────────────────────────────────────────────
async function loadPosts() {
  const results = await Promise.all(
    POSTS.map(async fname => {
      try {
        const r = await fetch('posts/' + fname);
        if (!r.ok) return null;
        const raw = await r.text();
        const { meta, body } = parseFrontmatter(raw);
        return {
          filename: fname,
          title:    meta.title    || fname.replace('.md', '').replace(/-/g, ' '),
          date:     meta.date     || '',
          category: meta.category || '',
          excerpt:  meta.excerpt  || '',
          body,
        };
      } catch {
        return null;
      }
    })
  );

  ALL_POSTS = results
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  renderBlogGrid();
}

// ─── GRID ────────────────────────────────────────────────────────────────────
function renderBlogGrid() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  grid.innerHTML = '';

  ALL_POSTS.slice(0, visibleCount).forEach((post, i) => {
    const card = document.createElement('div');
    card.className = 'blog-card' + (i === 0 ? ' featured' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.onclick   = () => openPost(i);
    card.onkeydown = e => { if (e.key === 'Enter') openPost(i); };
    card.innerHTML = `
      <div class="blog-cat">${escHtml(post.category)}</div>
      <div class="blog-title">${escHtml(post.title)}</div>
      ${i === 0 ? `<div class="blog-excerpt">${escHtml(post.excerpt)}</div>` : ''}
      <div class="blog-meta">
        <span class="blog-date">${escHtml(fmtDate(post.date))}</span>
        <span class="read-more">Read →</span>
      </div>
    `;
    grid.appendChild(card);
  });

  const btn = document.getElementById('show-more-btn');
  if (btn) btn.style.display = visibleCount >= ALL_POSTS.length ? 'none' : 'inline-block';
}

window.showMorePosts = function () {
  visibleCount += 4;
  renderBlogGrid();
};

// ─── POST OVERLAY ────────────────────────────────────────────────────────────
// Body is already in memory from loadPosts — opens instantly, no second fetch.
function openPost(index) {
  const post = ALL_POSTS[index];
  if (!post) return;

  document.getElementById('overlay-cat').textContent    = post.category;
  document.getElementById('post-title').textContent     = post.title;
  document.getElementById('post-date').textContent      = fmtDate(post.date);

  const mins = Math.max(1, Math.ceil((post.body || '').split(/\s+/).length / 220));
  document.getElementById('post-read-time').textContent = `${mins} min read`;
  document.getElementById('post-body').innerHTML        = marked.parse(post.body || '');

  const overlay = document.getElementById('blog-overlay');
  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

window.closePost = function () {
  document.getElementById('blog-overlay').classList.remove('open');
  document.body.style.overflow = '';
};

// ─── KEYBOARD ────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (!document.getElementById('blog-overlay').classList.contains('open')) return;
  if (e.key === 'Escape') window.closePost();
});

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', loadPosts);