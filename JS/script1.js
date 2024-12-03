const logo = document.getElementById('logo');
const navbar = document.getElementById('navbar');
const homepageContent = document.querySelector('.homepage-content');
let currentIndex = 0;
const items = document.querySelectorAll('.fashion-item');
const totalItems = items.length;
const maxFontSize = 5;
const minFontSize = 2; 
const scrollStart = 150; 
const scrollThreshold = 100;

function setInitialLogoPosition() {
    logo.style.top = '27%'; 
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        logo.classList.add('sticky');
        const newSize = Math.max(minFontSize, maxFontSize - (scrollY / scrollStart) * (maxFontSize - minFontSize));
        logo.style.fontSize = `${newSize}em`;
        logo.style.top = '10px'; 
    } else {
        logo.classList.remove('sticky');
        logo.style.fontSize = `${maxFontSize}em`;
        logo.style.top = '27%';
    }

    if (scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled'); 
    }
});

window.addEventListener("wheel", (event) => {
    event.preventDefault();
    const deltaY = event.deltaY; 
    const speedFactor = 2;  
    window.scrollBy({
        top: deltaY / speedFactor, 
        left: 0,
        behavior: 'smooth'
    });
}, { passive: false });

setInitialLogoPosition();

function nextSlide() {
    currentIndex++;

    if (currentIndex >= totalItems) {
        setTimeout(() => {
            currentIndex = 0; 
            homepageContent.style.transition = 'none'; 
            homepageContent.style.transform = `translateX(0)`; 
        }, 500);
    } else {
        homepageContent.style.transition = 'transform 0.5s ease'; 
    }

    const offset = -currentIndex * 200; 
    homepageContent.style.transform = `translateX(${offset}px)`; 
}

setInterval(nextSlide, 3000);
