const menuBtn = document.querySelector('.header_menu');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
