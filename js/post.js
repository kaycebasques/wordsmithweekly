(function() {
  var offline = document.querySelector('.content__offline'),
      yes = document.querySelector('.content__offline-yes'),
      no = document.querySelector('.content__offline-no');
  if ('serviceWorker' in navigator) {
    offline.classList.add('.content__offline--visible');
    yes.addEventListener('click', function() {
      console.log('yes');
    });
    no.addEventListener('click', function() {
      console.log('no');
    });
  }
})();
