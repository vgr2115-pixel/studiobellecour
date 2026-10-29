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
