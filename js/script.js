//page loader, loading screen
const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {

    if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
    }

    if (preloader.style.opacity > 0) {
        preloader.style.opacity -= 0.1;
    } 
    
    else if (preloader.style.opacity == 0) {
        preloader.style.display = 'none';
    } //without this page loader block (hide) navbar and other content

    else {
      clearInterval(fadeEffect);
    }
}, 250);



