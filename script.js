document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('default-carousel');
    const slides = carousel.querySelectorAll('[data-carousel-item]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    const btnPrev = carousel.querySelector('[data-carousel-prev]');
    const btnNext = carousel.querySelector('[data-carousel-next]');
  
    let currentIndex = 0; 
  
    function showSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
  
      slides.forEach((slide) => slide.classList.remove('active'));
      indicators.forEach((indicator) => indicator.classList.remove('active'));
  
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
      currentIndex = index;
    }
  

    btnNext.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
    btnPrev.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  

    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => {
        showSlide(i);
      });
    });
  

    showSlide(0);
    setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  });
  