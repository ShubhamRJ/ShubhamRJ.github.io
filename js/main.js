/* ─── main.js ────────────────────────────────────────────────────────────────
   Entry point: scroll animations, smooth scroll for nav links.
   ─────────────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // ── INTERSECTION OBSERVER — fade-in on scroll ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ── ACTIVE NAV HIGHLIGHT ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--accent)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
});
