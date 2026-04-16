/* ─── photography.js ─────────────────────────────────────────────────────────
   Renders the photography section.
   Photos are loaded from your existing GitHub Pages photography repo:
   https://shubhamrj.github.io/photography/images/

   To add photos:
   - Push new images to the /photography/images/thumbs/ and /fulls/ folders
     in your shubhamrj.github.io repo, then add the filename to PHOTOS below.
   ─────────────────────────────────────────────────────────────────────────── */

const BASE_THUMB = 'https://shubhamrj.github.io/photography/images/thumbs/';
const BASE_FULL  = 'https://shubhamrj.github.io/photography/images/fulls/';

// All filenames from the photography site
const PHOTOS = [
  '1000013634~3.jpg',
  '20220818_182405.jpg',
  '20220903_185053.jpg',
  '20221010_180834-EFFECTS.jpg',
  '20221218_184348.jpg',
  '20230215_172945.jpg',
  '20230316_193716.jpg',
  '20230428_184457.jpg',
  '20230723_114724.jpg',
  '20230723_224719.jpg',
  '20240902_104608.jpg',
  '20240908_185124-EFFECTS.jpg',
  'IMG-20230817-WA0006.jpg',
  'IMG-20231015-WA0118.jpg',
  'IMG-20231228-WA0000.jpg',
  'IMG_20221011_130213.jpg',
  'IMG_3591.jpg',
  'PXL_20240929_052924494_exported_0.jpg',
  'PXL_20240929_060324062.ACTION_PAN-01.COVER.jpg',
  'PXL_20241011_044401732.NIGHT.RAW-01.COVER.jpg',
  'PXL_20241011_052113241.NIGHT.RAW-01.COVER.jpg',
  'PXL_20241012_162602926.RAW-01.COVER~2.jpg',
  'PXL_20241021_003309010.NIGHT.jpg',
  'PXL_20241021_020627947~2.jpg',
  'PXL_20241022_003719678.jpg',
  'PXL_20241104_004212679.jpg',
  'PXL_20250121_010758722.jpg',
  'PXL_20250216_013816857~2.jpg',
  'PXL_20250403_103154982~2.jpg',
  'PXL_20250406_002322047~2.jpg',
  'PXL_20250406_235712736.jpg',
  'PXL_20250503_193652486.jpg',
  'PXL_20250523_013002007.jpg',
  'PXL_20250525_213401379.MP.jpg',
  'PXL_20250525_220238887.MP.jpg',
  'PXL_20250531_010622725.MP.jpg',
  'PXL_20250531_021719960.jpg',
  'PXL_20250602_010301172.jpg',
  'PXL_20250602_023805890.jpg',
  'PXL_20250604_022342104.jpg',
  'PXL_20250611_025016726.jpg',
  'PXL_20250620_040052479.jpg',
  'PXL_20250628_082434469.jpg',
  'PXL_20250628_083031036.NIGHT.jpg',
  'PXL_20250628_085141872.NIGHT.jpg',
  'PXL_20250628_230625458.jpg',
  'PXL_20250629_212414966.jpg',
  'PXL_20250630_014035027.jpg',
];

// ─── LIGHTBOX STATE ──────────────────────────────────────────────────────────
let lbIndex = 0;

function openLightbox(index) {
  lbIndex = index;
  const lb   = document.getElementById('lightbox');
  const img  = document.getElementById('lightbox-img');
  img.src    = BASE_FULL + PHOTOS[index];
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.closeLightbox = function () {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
};

window.lightboxPrev = function (e) {
  e.stopPropagation();
  lbIndex = (lbIndex - 1 + PHOTOS.length) % PHOTOS.length;
  document.getElementById('lightbox-img').src = BASE_FULL + PHOTOS[lbIndex];
};

window.lightboxNext = function (e) {
  e.stopPropagation();
  lbIndex = (lbIndex + 1) % PHOTOS.length;
  document.getElementById('lightbox-img').src = BASE_FULL + PHOTOS[lbIndex];
};

// ─── RENDER GRID ─────────────────────────────────────────────────────────────
function renderPhotos() {
  const grid = document.getElementById('photo-grid');
  if (!grid) return;

  PHOTOS.forEach((filename, i) => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.onclick   = () => openLightbox(i);

    const img       = document.createElement('img');
    img.src         = BASE_THUMB + filename;
    img.alt         = `Photo ${i + 1}`;
    img.loading     = 'lazy';
    img.decoding    = 'async';

    item.appendChild(img);
    grid.appendChild(item);
  });
}

// ─── KEYBOARD ────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'Escape')      window.closeLightbox();
  if (e.key === 'ArrowLeft')   window.lightboxPrev(e);
  if (e.key === 'ArrowRight')  window.lightboxNext(e);
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderPhotos);
