const SLIDE_WIDTH = '351px';
let currentSlide = 1;
const $carouselSlides = document.createElement('div');
let duration = 500;

const renderCarousel = ($container, images) => {
  $carouselSlides.classList.add('carousel-slides');
  const $fragment = document.createDocumentFragment();
  const $prevBtn = document.createElement('button');
  const $nextBtn = document.createElement('button');
  $prevBtn.classList.add('carousel-control', 'prev');
  $nextBtn.classList.add('carousel-control', 'next');

  $prevBtn.innerHTML = '&laquo;';
  $nextBtn.innerHTML = '&raquo;';

  images.forEach((_, index) => {
    const $slide = document.createElement('img');
    $slide.src = images[index];
    $fragment.appendChild($slide);
  });

  const firstSlide = document.createElement('img');
  const lastSlide = document.createElement('img');
  firstSlide.src = images[0];
  lastSlide.src = images[images.length - 1];

  $fragment.prepend(lastSlide);
  $fragment.appendChild(firstSlide);
  $carouselSlides.appendChild($fragment);
  $container.appendChild($carouselSlides);
  $container.appendChild($prevBtn);
  $container.appendChild($nextBtn);

  $carouselSlides.style.setProperty('--currentSlide', currentSlide);

  $container.style.opacity = 1;
  $container.style.width = SLIDE_WIDTH;
};

const prevSlide = total => {
  if (currentSlide >= 1) {
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', --currentSlide);
  }
  if (currentSlide === 0) {
    currentSlide = total;
    $carouselSlides.addEventListener('transitionend', () => {
      $carouselSlides.style.setProperty('--duration', 0);
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    })
  }
};

const nextSlide = total => {
  if (currentSlide <= total) {
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', ++currentSlide);
  }
  if (currentSlide === total + 1) {
    currentSlide = 1;
    $carouselSlides.addEventListener('transitionend', () => {
      $carouselSlides.style.setProperty('--duration', 0);
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    })
  }
};


const carousel = ($container, images) => {
  renderCarousel($container, images);

  $container.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('carousel-control')) return;
    if (target.classList.contains('prev')) {
      prevSlide(images.length);
    }
    if (target.classList.contains('next')) {
      nextSlide(images.length);
    }
  });
};

carousel(document.querySelector('.carousel'), [
  'assets/movies/movie-1.jpg',
  'assets/movies/movie-2.jpg',
  'assets/movies/movie-3.jpg',
  'assets/movies/movie-4.jpg'
]);