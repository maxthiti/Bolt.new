document.querySelectorAll('.carousel').forEach(carousel => {
  const imagesContainer = carousel.querySelector('.carousel-images');
  const images = imagesContainer.querySelectorAll('img');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let index = 0;

  const updateCarousel = () => {
    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  };

  const createDots = () => {
    dotsContainer.innerHTML = '';
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === index) dot.classList.add('active');
      dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });
  };

  carousel.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

  carousel.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  createDots();
  updateCarousel();
});
