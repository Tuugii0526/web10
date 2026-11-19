// Лаб 10 — хуудасны логик.
import { photos } from './data.js';

const cards = document.getElementById('cards');
const PLACEHOLDER = 'images/placeholder.svg';

// Жижиг туслах: таг, класс, текст → элемент (textContent ашиглана, XSS-гүй).
const el = (tag, className = '', text = '') => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

// ---- Бэлэн функцууд: makeCard, renderCards (цааш өөрчлөхгүй) ----

export const makeCard = (photo) => {
  const li = el('li', 'col');
  const wrap = el('div', 'card h-100 bg-body-tertiary');

  // Урд тал: зураг + нэр; ар тал: тайлбар + эх сурвалж (Лаб 9-ийн flip card).
  const flip = el('article', 'flip-card photo-card');
  flip.tabIndex = 0;
  const inner = el('div', 'flip-inner');

  const front = el('figure', 'face face-front card mb-0');
  const img = el('img');
  img.src = photo.src || PLACEHOLDER;
  img.alt = photo.title;
  img.loading = 'lazy';
  img.onerror = () => { img.onerror = null; img.src = PLACEHOLDER; };
  front.append(img, el('figcaption', 'photo-caption', photo.title));

  const back = el('div', 'face face-back card p-3 mb-0');
  back.append(el('h3', 'h6', photo.title), el('p', 'mb-0', photo.desc || 'Тайлбаргүй.'));
  if (photo.credit) {
    const credit = el('small', 'photo-credit', '📷 ');
    const a = el('a', '', photo.credit.author);
    a.href = photo.credit.url;
    a.target = '_blank';
    a.rel = 'noopener';
    credit.append(a, ` · ${photo.credit.license}`);
    back.append(credit);
  }
  inner.append(front, back);
  flip.append(inner);

  // Доод хэсэг: газар, огноо, тагууд, like товч.
  const body = el('div', 'card-body d-grid gap-2');
  const meta = el('div', 'd-flex justify-content-between align-items-center gap-2');
  meta.append(el('small', 'text-body-secondary', `📍 ${photo.place} · ${photo.date}`));
  const like = el('button', 'btn btn-outline-danger btn-sm', `♥ ${photo.likes}`);
  like.type = 'button';
  like.dataset.like = '';
  like.dataset.id = photo.id;
  like.setAttribute('aria-label', `${photo.title} — like (${photo.likes})`);
  meta.append(like);

  const tags = el('div', 'd-flex flex-wrap gap-1');
  (photo.tags || []).forEach((t) => tags.append(el('span', 'badge text-bg-secondary', `#${t}`)));

  body.append(meta, tags);
  wrap.append(flip, body);
  li.append(wrap);
  return li;
};

export const renderCards = (list) => {
  cards.replaceChildren(...list.map(makeCard));
  document.getElementById('count').textContent = `${list.length} зураг`;
  document.getElementById('empty').classList.toggle('d-none', list.length > 0);
};

// ---- Task 4: currentList(), like listener, шүүлтүүрийн listener — дараа нь ----
// Одоогоор бүх зургийг шууд харуулна; Album класс бэлэн болмогц album.photos-оор солино.
renderCards(photos);
