'use strict';

const slidebar = document.querySelector('.sidebar-content');
const offcanvas = document.querySelector('.offcanvas');
const links = document.querySelectorAll('.nav-link');

slidebar.addEventListener('click', function (e) {
  const clickedLink = e.target.closest('.nav-link');

  if (!clickedLink) return;

  links.forEach(link => {
    link.classList.remove('active');
  });
  clickedLink.classList.add('active');
});

offcanvas.addEventListener('click', function (e) {
  const clickedLink = e.target.closest('.nav-link');

  if (!clickedLink) return;

  links.forEach(link => {
    link.classList.remove('active');
  });
  clickedLink.classList.add('active');
});
