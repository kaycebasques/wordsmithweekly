(function () {
  'use strict';

  var resizeTimerId;
  var header = document.querySelector('.header');
  var nav = document.querySelector('.nav');
  var headerVisible = '.header--visible';
  var headerHidden = '.header--hidden';
  var headerTitle = document.querySelector('.header__title');

  function addClass(node, className) {
    if (!node.classList.contains(className)) {
      node.classList.add(className);
    }
  }

  function removeClass(node, className) {
    if (node.classList.contains(className)) {
      node.classList.remove(className);
    }
  }

  function removeNarrowNavClasses() {
    nav.classList.remove('nav--visible');
    nav.classList.remove('nav--hidden');
  }

  function showHeader() {
    removeClass(nav, 'nav--visible');
    addClass(nav, 'nav--hidden');
    removeClass(header, 'header--hidden');
    addClass(header, 'header--visible');
    removeClass(headerTitle, 'header__title--hidden');
    addClass(headerTitle, 'header__title--visible');
  }

  function showNav() {
    removeClass(headerTitle, 'header__title--visible');
    addClass(headerTitle, 'header__title--hidden');
    removeClass(header, 'header--visible');
    addClass(header, 'header--hidden');
    removeClass(nav, 'nav--hidden');
    addClass(nav, 'nav--visible');
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
    var isNarrow = window.matchMedia('(max-width: 999px)').matches;
    if (isNarrow) {
      setNarrowLayout();
      return;
    }
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
      showNav);
  document.querySelector('.nav__close').addEventListener('click',
      showHeader);

  window.addEventListener('resize', function() {
    clearTimeout(resizeTimerId);
    resizeTimerId = setTimeout(updateLayout, 500);
  });

  updateLayout();
})();
