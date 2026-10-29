 'use strict';
const dialog = document.querySelector('#legal');
document.querySelector('#legal-open').addEventListener('click', () => dialog.showModal());
document.querySelector('#legal-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
 if (event.target !== dialog) return;
 const r = dialog.getBoundingClientRect();
 if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
const dock = document.querySelector('.mobile-dock');
if ('IntersectionObserver' in window) {
 dock.classList.add('dock-managed');
 const visible = new Set();
 const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
   if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target);
  }
  dock.classList.toggle('is-visible', visible.size === 0);
 }, { threshold: .1 });
 document.querySelectorAll('.hero-book, .final-book').forEach(button => observer.observe(button));
}

// Open a price category when reached from the salon introduction.
document.querySelectorAll('.salon-services a').forEach(link => {
 link.addEventListener('click', () => {
  const category = document.querySelector(link.getAttribute('href'));
  if (category) category.open = true;
 });
});

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-toggle');
function closeMenu(returnFocus = false) {
 header.classList.remove('menu-open');
 menuButton.setAttribute('aria-expanded', 'false');
 if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
 const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
 menuButton.setAttribute('aria-expanded', String(expanded));
 header.classList.toggle('menu-open', expanded);
});
document.querySelectorAll('#main-navigation a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && header.classList.contains('menu-open')) closeMenu(true);
});
window.matchMedia('(max-width: 700px)').addEventListener('change', () => closeMenu());
