//Code for slider
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

//Functions
function nextSlide() {
    const currentSlide = document.querySelector('.current');
    currentSlide.classList.remove('current');
    if(currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    //reset the interval when clicked
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

function prevSlide() {
    const currentSlide = document.querySelector('.current');
    currentSlide.classList.remove('current');
    if(currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length-1].classList.add('current');
    }
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

//Events
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//Auto slide
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}




