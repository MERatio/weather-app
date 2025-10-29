const menuBtn = document.querySelector('.js-menu-btn');
const menuEl = document.querySelector('.js-menu');

menuBtn.addEventListener('click', () => {
  menuEl.style.display = menuEl.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (e) => {
  if (!e.target.matches('.js-menu-btn')) {
    menuEl.style.display = 'none';
  }
});
