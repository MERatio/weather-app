const menuButton = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');

menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (e) => {
  if (!e.target.matches('.js-menu-btn')) {
    menu.style.display = 'none';
  }
});
