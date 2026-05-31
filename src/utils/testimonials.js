export function initTestimonials() {
  const slides = document.querySelectorAll('.depoimentos__slide');
  const dots = document.querySelectorAll('.depoimentos__dot');
  const prevBtn = document.querySelector('.depoimentos__arrow--prev');
  const nextBtn = document.querySelector('.depoimentos__arrow--next');
  const slider = document.querySelector('.depoimentos__slider');
  
  if (!slides.length) return;
  
  let currentIndex = 0;
  const totalSlides = slides.length;

  function changeSlide(index) {
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1; 
    } else {
      currentIndex = index;
    }

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
        if (dots[i]) dots[i].classList.add('active');
      } else {
        slide.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active');
      }
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => changeSlide(index));
  });

  if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(currentIndex + 1));

  if (slider) {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const distance = touchStartX - touchEndX;
      
      if (distance > minSwipeDistance) {
        changeSlide(currentIndex + 1);
      } 

      else if (distance < -minSwipeDistance) {
        changeSlide(currentIndex - 1);
      }
    }
  }
}