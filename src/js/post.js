(function() {
  function hideButtons() {
    yes.disabled = true;
    no.disabled = true;
    yes.classList.add('hidden');
    no.classList.add('hidden');
  }
  var offline = document.querySelector('.offline'),
      yes = document.querySelector('.offline__yes'),
      no = document.querySelector('.offline__no'),
      yesResponse = document.querySelector('.offline__yes-response'),
      noResponse = document.querySelector('.offline__no-response');
  if (localStorage.getItem('showOfflinePrompt') === null) {
    var value = 'true';
    localStorage.setItem('showOfflinePrompt', value);
  }
  if ('serviceWorker' in navigator && localStorage.getItem('showOfflinePrompt') === 'true') {
    offline.classList.add('offline--visible');
    yes.addEventListener('click', function() {
      hideButtons();
      yesResponse.classList.add('offline__response--visible');
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        localStorage.setItem('showOfflinePrompt', 'false');
        ga('send', 'event', 'Offline', 'click', 'Opt-In', 1);
      }, function(error) {
        console.log('ServiceWorker registration failed: ', error);
        ga('send', 'event', 'Offline', 'click', 'SW Registration Error', 1);
      });
    });
    no.addEventListener('click', function() {
      ga('send', 'event', 'Offline', 'click', 'Opt-Out', 1);
      localStorage.setItem('showOfflinePrompt', 'false');
      hideButtons();
      noResponse.classList.add('offline__response--visible');
    });
  }
})();
