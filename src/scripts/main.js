'use strict';
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.body;

if (burger && menu) {
  burger.addEventListener("click", () => {
    const isOpen = burger.classList.toggle("is-open");
    menu.classList.toggle("is-open", isOpen);

    // блокуємо скрол коли меню відкрите
    body.classList.toggle("no-scroll", isOpen);

    // доступність (важливо)
    burger.setAttribute("aria-expanded", isOpen);
  });
}
