let carouselContainer = document.querySelector('.carousel-container');
let totalImages = document.querySelectorAll('.carousel-container img').length;
let currentIndex = 0;

setInterval(() => {
    currentIndex++;
    if (currentIndex === totalImages) {
        currentIndex = 0;
    }
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 10000); // Memperpanjang interval menjadi 10 detik (10000ms)