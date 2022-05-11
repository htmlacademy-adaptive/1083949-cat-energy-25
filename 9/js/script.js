let navMenu = document.querySelector('.menu__popover');
let navToggle = document.querySelector('.menu__toggle');

navMenu.classList.remove('menu__popover--nojs');

navToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('menu__popover--closed')) {
    navMenu.classList.remove('menu__popover--closed');
    navMenu.classList.add('menu__popover--opened');
  } else {
    navMenu.classList.add('menu__popover--closed');
    navMenu.classList.remove('menu__popover--opened');
  }
});
