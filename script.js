const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');

// nav menu //

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const MoreSpeakers = document.querySelector('.featured-speakers2');
const MoreBtn = document.querySelector('.more');

MoreBtn.addEventListener('click', () => {
  MoreBtn.classList.toggle('active');
  MoreSpeakers.classList.toggle('active');
});