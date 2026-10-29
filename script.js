'use strict';
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  for (const candidate of tabs) {
    const selected = candidate === tab;
    candidate.setAttribute('aria-selected', String(selected));
    candidate.tabIndex = selected ? 0 : -1;
    document.getElementById(candidate.getAttribute('aria-controls')).hidden = !selected;
  }
  if (focus) tab.focus();
}
for (const tab of tabs) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    const index = tabs.indexOf(tab);
    let next;
    if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
    if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
    if (event.key === 'Home') next = tabs[0];
    if (event.key === 'End') next = tabs[tabs.length - 1];
    if (next) { event.preventDefault(); selectTab(next, true); }
  });
}
const dialog = document.querySelector('#legal');
document.querySelector('#legal-open').addEventListener('click', () => dialog.showModal());
document.querySelector('#legal-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
// One signature effect, confined to the real photograph. Booking never waits for it.
const mirror = document.querySelector('#mirror');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');
const image = mirror.querySelector('img');
function revealMirror() { if (!reducedMotion.matches) mirror.classList.add('ready'); }
function startMirror() {
  if (image.complete) revealMirror(); else image.addEventListener('load', revealMirror, { once: true });
}
if ('IntersectionObserver' in window) {
  const mirrorObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      startMirror(); mirrorObserver.disconnect();
    }
  }, { threshold: .35 });
  mirrorObserver.observe(mirror);
} else startMirror();
// Keep one prominent booking action in view on mobile, without interrupting the reader.
const dock = document.querySelector('.mobile-dock');
if ('IntersectionObserver' in window) {
  dock.classList.add('dock-managed');
  const visibleBookingButtons = new Set();
  const dockObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleBookingButtons.add(entry.target);
      else visibleBookingButtons.delete(entry.target);
    }
    dock.classList.toggle('is-visible', visibleBookingButtons.size === 0);
  }, { threshold: .1 });
  document.querySelectorAll('.hero-book, .last-booking .button').forEach(button => dockObserver.observe(button));
}
let raf = 0;
mirror.addEventListener('pointermove', event => {
  if (reducedMotion.matches || !finePointer.matches) return;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const r = mirror.getBoundingClientRect();
    mirror.style.setProperty('--rx', `${((event.clientY - r.top) / r.height - .5) * -3}deg`);
    mirror.style.setProperty('--ry', `${((event.clientX - r.left) / r.width - .5) * 3}deg`);
  });
});
mirror.addEventListener('pointerleave', () => {
  cancelAnimationFrame(raf);
  mirror.style.setProperty('--rx', '0deg');
  mirror.style.setProperty('--ry', '0deg');
});
