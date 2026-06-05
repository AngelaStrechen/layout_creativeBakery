'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

if (burger && menu) {
  function openMenu() {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    body.classList.add('no-scroll');

    burger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');

    burger.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = burger.classList.contains('is-open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // клік по бургеру
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // клік по документу (закриття якщо клік поза меню)
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
      closeMenu();
    }
  });

  // Esc для закриття
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}
