'use strict';

const slidebar = document.querySelector('.sidebar-content');
if (slidebar) {
  slidebar.addEventListener('click', function (e) {
    const clickedLink = e.target.closest('.nav-link');
    if (!clickedLink) return;

    document.querySelectorAll('.sidebar-content .nav-link').forEach(link => {
      link.classList.remove('active');
    });
    clickedLink.classList.add('active');
  });
}

const bottomBar = document.querySelector('.bottombar-nav');
if (bottomBar) {
  bottomBar.addEventListener('click', function (e) {
    const clickedItem = e.target.closest('.bottom-nav-item');
    if (!clickedItem) return;

    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.classList.remove('active');
    });
    clickedItem.classList.add('active');
  });
}
