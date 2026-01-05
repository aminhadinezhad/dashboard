'use strict';

const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const chevronDowns = document.querySelectorAll('.chevron-down');

list.addEventListener('click', function (e) {
  const clicked = e.target.closest('.item');

  if (!clicked) return;

  const rotateChevron = function (index) {
    let counter = 0;
    for (let i = 0; i < Number(index.id); i++) {
      if (i < Number(index.id)) counter = counter + 1;
    }
    chevronDowns[counter].classList.toggle('rotate');
  };

  rotateChevron(clicked);
});


