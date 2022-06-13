document.addEventListener('DOMContentLoaded', function() {
    
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const startButton = document.querySelector('#splash .start-button');

    
   

    scene.addEventListener('loaded', function (e) {
        setTimeout(function () {
                loading.style.display = 'none';
                splash.style.backgroundColor = 'rgba(34, 149, 214, 0.5)';
                startButton.style.opacity = 1;
            }, 1000);
    });




});
