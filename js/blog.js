/* ─── blog.js ────────────────────────────────────────────────────────────────
   To add a new post:
     1. Create posts/your-slug.md with frontmatter (see TEMPLATE.md)
     2. Add an entry to POST_INDEX below — newest first
   ─────────────────────────────────────────────────────────────────────────── */

// ─── POST INDEX ──────────────────────────────────────────────────────────────
// All metadata lives here so the grid renders instantly without fetching files.
// 'body' is loaded on demand when a reader opens the post.
const POST_INDEX = [
  {
    id:       'my-answer-to-peter-thiels-question',
    file:     'my-answer-to-peter-thiels-question.md',
    title:    'My Answer to Peter Thiel\'s Question',
    date:     '2025-12-24',
    category: 'Random',
    featured: true,
    excerpt:  'Peter Thiel has this famous question he asks in interviews — what important truth do very few people agree with you on? My answers are obviously biased to my experiences, but here\'s an attempt.',
  },
  {
    id:       'the-art-of-frontend-engineering',
    file:     'the-art-of-frontend-engineering.md',
    title:    'The Art of Frontend Engineering',
    date:     '2023-07-28',
    category: 'Engineering',
    featured: false,
    excerpt:  'With 3 years of experience in frontend with ReactJS, this is an exhaustive living document of practices I\'ve found genuinely useful — from design systems and SEO to testing philosophy and advanced optimizations.',
  },
  {
    id:       'distributed-consensus-where-is-it-used',
    file:     'distributed-consensus-where-is-it-used.md',
    title:    'Distributed Consensus: Where is it used?',
    date:     '2024-06-12',
    category: 'Distributed Systems',
    featured: false,
    excerpt:  'A reference map of where Raft, Paxos, and ZAB actually show up in production systems — from etcd to Spanner to Kafka.',
  },
  {
    id:       'social-influence-dialogue-systems',
    file:     'social-influence-dialogue-systems.md',
    title:    'Social Influence Dialogue Systems',
    date:     '2024-05-03',
    category: 'NLP',
    featured: false,
    excerpt:  'I presented a survey paper at Stony Brook\'s NLP Reading Group on social influence dialogue systems — covering persuasion, negotiation, therapy bots, datasets, methodologies, and my own mini experiments with GPT-4, Gemini, and Llama.',
  },
  {
    id:       'distributed-systems-papers-and-resources',
    file:     'distributed-systems-papers-and-resources.md',
    title:    'Distributed Systems Papers & Resources',
    date:     '2024-03-20',
    category: 'Distributed Systems',
    featured: false,
    excerpt:  'A living list of distributed systems papers I\'ve read and found genuinely interesting — well written, introduces a new idea, and very well explained. Got a recommendation? Let me know!',
  },
  {
    id:       'random-ideas-with-potential',
    file:     'random-ideas-with-potential.md',
    title:    'Random Ideas with Potential',
    date:     '2024-02-16',
    category: 'Ideas',
    featured: false,
    excerpt:  'I get a lot of random ideas as I read blogs and watch videos. Making a list here so I can come back to them. If any seem interesting, let\'s work on them together!',
  },
  {
    id:       'the-fantastic-engineering-of-code-editors',
    file:     'the-fantastic-engineering-of-code-editors.md',
    title:    'The Fantastic Engineering of Code Editors',
    date:     '2023-08-15',
    category: 'Engineering',
    featured: false,
    excerpt:  'Building a code editor from scratch at Crio.Do forced me to understand how web-based editors actually work — syntax highlighting, document models, intellisense, and the brilliant engineering hidden behind a blinking cursor.',
  },
  {
    id:       'llms-for-hiring',
    file:     'llms-for-hiring.md',
    title:    'LLMs for Hiring',
    date:     '2023-10-23',
    category: 'Ideas',
    featured: false,
    excerpt:  'The hiring process is broken — the number of applicants is insane, feedback is absent, and candidates are left in confusion. Here\'s how LLMs could fix at least the feedback problem.',
  },
  {
    id:       'duplication-on-social-media',
    file:     'duplication-on-social-media.md',
    title:    'Let\'s Talk About Duplication on Social Media',
    date:     '2023-07-22',
    category: 'Ideas',
    featured: false,
    excerpt:  'The same image posted by hundreds of different accounts — not reposts, actual duplicates. This wastes enormous storage and infrastructure. Here\'s a simple fix that benefits creators, platforms, and the planet.',
  },
  {
    id:       'personal-recommendations',
    file:     'personal-recommendations.md',
    title:    'Personal Recommendations',
    date:     '2023-07-11',
    category: 'Personal',
    featured: false,
    excerpt:  'My list of personal favourites — highly curated YouTube channels, creators, blogs, newsletters, and anime that I\'ve been following regularly for more than half a year.',
  },
  {
    id:       'carbon-footprint-of-emails',
    file:     'carbon-footprint-of-emails.md',
    title:    'The Carbon Footprint of Emails',
    date:     '2023-07-05',
    category: 'Ideas',
    featured: false,
    excerpt:  'Thousands of irrelevant CVE emails flooding an inbox sparked this question — how much storage and carbon do spam and forgotten emails actually waste? The numbers are staggering.',
  },
];

// ─── CATEGORY COLOR MAP ───────────────────────────────────────────────────────
const CAT_COLORS = {
  'Engineering':         { bg: '#f0f4ff', text: '#3451a7' },
  'Distributed Systems': { bg: '#f0faf4', text: '#1a6b44' },
  'NLP':                 { bg: '#fdf4ff', text: '#7c3aaa' },
  'Ideas':               { bg: '#fff8ed', text: '#924d0e' },
  'Personal':            { bg: '#fef2f2', text: '#9b2020' },
  'Random':              { bg: '#f4f4f4', text: '#555555' },
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let activeCategory = 'All';
let bodyCache      = {};

// ─── UTILS ───────────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fmtDate(str) {
  const d = new Date(str + 'T00:00:00');
  if (isNaN(d)) return str;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function readMins(text) {
  return Math.max(1, Math.ceil((text || '').split(/\s+/).length / 220));
}

function catStyle(cat) {
  const c = CAT_COLORS[cat] || { bg: '#f4f4f4', text: '#555' };
  return `background:${c.bg};color:${c.text}`;
}

// ─── CATEGORIES ──────────────────────────────────────────────────────────────
function getCategories() {
  const cats = ['All', ...new Set(POST_INDEX.map(p => p.category))];
  return cats;
}

// ─── FILTER TABS ─────────────────────────────────────────────────────────────
function renderFilterTabs() {
  const wrap = document.getElementById('blog-filters');
  if (!wrap) return;
  wrap.innerHTML = '';

  const cats = getCategories();
  const counts = {};
  POST_INDEX.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'blog-filter-btn' + (cat === activeCategory ? ' active' : '');
    const count = cat === 'All' ? POST_INDEX.length : (counts[cat] || 0);
    btn.innerHTML = `${escHtml(cat)} <span class="filter-count">${count}</span>`;
    btn.onclick = () => { activeCategory = cat; renderFilterTabs(); renderBlogList(); };
    wrap.appendChild(btn);
  });
}

// ─── FEATURED POST ───────────────────────────────────────────────────────────
function renderFeatured() {
  const wrap = document.getElementById('blog-featured');
  if (!wrap) return;

  const post = POST_INDEX.find(p => p.featured) || POST_INDEX[0];
  if (!post) return;

  wrap.innerHTML = `
    <div class="blog-featured-card" role="button" tabindex="0"
         onclick="openPost('${escHtml(post.id)}')"
         onkeydown="if(event.key==='Enter')openPost('${escHtml(post.id)}')">
      <div class="blog-featured-inner">
        <div class="blog-featured-meta">
          <span class="blog-cat-pill" style="${catStyle(post.category)}">${escHtml(post.category)}</span>
          <span class="blog-featured-label">Featured</span>
        </div>
        <h3 class="blog-featured-title">${escHtml(post.title)}</h3>
        <p class="blog-featured-excerpt">${escHtml(post.excerpt)}</p>
        <div class="blog-featured-footer">
          <span class="blog-date-str">${escHtml(fmtDate(post.date))}</span>
          <span class="blog-read-link">Read essay →</span>
        </div>
      </div>
    </div>
  `;
}

// ─── POST LIST ───────────────────────────────────────────────────────────────
function renderBlogList() {
  const list = document.getElementById('blog-list');
  if (!list) return;

  const filtered = activeCategory === 'All'
    ? POST_INDEX
    : POST_INDEX.filter(p => p.category === activeCategory);

  // Don't show the featured post again in the list
  const featured = POST_INDEX.find(p => p.featured);
  const posts = filtered.filter(p => !p.featured || activeCategory !== 'All');

  if (posts.length === 0) {
    list.innerHTML = `<p class="blog-empty">No posts in this category yet.</p>`;
    return;
  }

  list.innerHTML = posts.map((post, i) => `
    <div class="blog-list-item" role="button" tabindex="0"
         onclick="openPost('${escHtml(post.id)}')"
         onkeydown="if(event.key==='Enter')openPost('${escHtml(post.id)}')">
      <div class="blog-list-left">
        <div class="blog-list-top">
          <span class="blog-cat-pill" style="${catStyle(post.category)}">${escHtml(post.category)}</span>
          <span class="blog-date-str">${escHtml(fmtDate(post.date))}</span>
        </div>
        <h4 class="blog-list-title">${escHtml(post.title)}</h4>
        <p class="blog-list-excerpt">${escHtml(post.excerpt)}</p>
      </div>
      <div class="blog-list-arrow">→</div>
    </div>
  `).join('');
}

// ─── POST OVERLAY ────────────────────────────────────────────────────────────
async function openPost(id) {
  const post = POST_INDEX.find(p => p.id === id);
  if (!post) return;

  document.getElementById('overlay-cat').textContent  = post.category;
  document.getElementById('post-title').textContent   = post.title;
  document.getElementById('post-date').textContent    = fmtDate(post.date);
  document.getElementById('post-body').innerHTML      = '<p style="color:var(--ink-muted);font-size:0.85rem">Loading…</p>';

  const overlay = document.getElementById('blog-overlay');
  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Load body on demand, cache it
  if (!bodyCache[id]) {
    try {
      const r = await fetch('posts/' + post.file);
      if (!r.ok) throw new Error('not found');
      const raw = await r.text();
      // Strip frontmatter
      let body = raw;
      if (raw.startsWith('---')) {
        const end = raw.indexOf('\n---', 3);
        if (end !== -1) body = raw.slice(end + 4).trim();
      }
      bodyCache[id] = body;
    } catch {
      bodyCache[id] = '_Post not found._';
    }
  }

  const body = bodyCache[id];
  const mins = readMins(body);
  document.getElementById('post-read-time').textContent = `${mins} min read`;
  document.getElementById('post-body').innerHTML = marked.parse(body);
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
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderFilterTabs();
  renderBlogList();
});
