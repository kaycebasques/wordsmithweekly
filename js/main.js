(function () {
  'use strict';
  function switchClasses(el, class1, class2) {
    if (el.classList.contains(class1)) {
      el.classList.remove(class1);
      el.classList.add(class2);
      return;
    }
    el.classList.remove(class2);
    el.classList.add(class1);
  }
  function toggleMenu() {
    switchClasses(document.querySelector('.header'), 'header--visible',
        'header--hidden');
    switchClasses(document.querySelector('.nav'), 'nav--visible',
        'nav--hidden');
  }
  document.querySelector('.header__menu').addEventListener('click',
      toggleMenu);
  document.querySelector('.nav__close').addEventListener('click',
      toggleMenu);
})();
