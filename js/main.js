(function () {
  'use strict';

  var resizeTimerId;
  var header = document.querySelector('.header');
  var nav = document.querySelector('.nav');
  var headerVisible = '.header--visible';
  var headerHidden = '.header--hidden';

  function removeNarrowNavClasses() {
    nav.classList.remove('nav--visible');
    nav.classList.remove('nav--hidden');
  }

  function showHeader() {
    header.classList.remove('header--hidden');
    header.classList.add('header--visible');
  }

  function hideNarrowNav() {
    nav.classList.remove('nav--visible');
    nav.classList.add('nav--hidden');
  }

  function setNarrowLayout() {
    hideNarrowNav();
    showHeader();
  }

  function setWideLayout() {
    showHeader(); // In case mobile menu was open when view changed.
    removeNarrowNavClasses(); 
  }

  function updateLayout() {
    var narrow = window.matchMedia('(max-width: 999px)').matches;
    if (narrow) {
      setNarrowLayout();
      return;
    }
    console.log('large');
    setWideLayout();
  }

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

  window.addEventListener('resize', function() {
    clearTimeout(resizeTimerId);
    resizeTimerId = setTimeout(updateLayout, 500);
  });

  updateLayout();
})();
