let currentImageIndex = 0;
const images = ["dea bear.jpg", "dea dating.jpg", "dea.jpg", "dea ood.jpg"];
const sliderContainer = document.querySelector('.slider-container');
const sliderImage = document.querySelector('.slider-image');

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function updateImage() {
    sliderImage.src = images[currentImageIndex];
    sliderImage.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

        // Add event listeners for swipe gestures (requires a swipe library)
        // Example using Hammer.js (you'll need to include Hammer.js in your HTML)
const hammer = new Hammer(sliderContainer);
hammer.on('panleft', nextImage);
hammer.on('panright', prevImage);