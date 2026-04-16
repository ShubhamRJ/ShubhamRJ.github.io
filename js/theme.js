/* ─── theme.js ───────────────────────────────────────────────────────────────
   Manages light/dark theme toggle with localStorage persistence.
   ─────────────────────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'sj-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

function getPreferred() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initTheme() {
  applyTheme(getPreferred());

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Respect OS preference changes if user hasn't overridden
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// Run immediately to avoid flash
applyTheme(getPreferred());
document.addEventListener('DOMContentLoaded', initTheme);
