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
      noResponse = document.querySelector('.offline__no-response'),
      neverShow = localStorage.getItem('neverShowOffline');
  if ('serviceWorker' in navigator && neverShow !== 'true') {
    offline.classList.add('offline--visible');
    yes.addEventListener('click', function() {
      console.log('omg add the site offline');
      hideButtons();
      yesResponse.classList.add('offline__response--visible');
    });
    no.addEventListener('click', function() {
      console.log('boo dont add offline');
      localStorage.setItem('neverShowOffline', 'true');
      hideButtons();
      noResponse.classList.add('offline__response--visible');
    });
  }
})();
