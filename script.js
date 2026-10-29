'use strict';
const dialog = document.querySelector('#legal');
const opener = document.querySelector('#legal-open');
opener.addEventListener('click', () => dialog.showModal());
document.querySelector('#legal-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
