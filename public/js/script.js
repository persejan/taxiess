window.addEventListener('load', function() {

    document.querySelector('.js-scroll').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.scroll').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      });
    
});