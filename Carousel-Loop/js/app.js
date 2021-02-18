const SLIDE_WIDTH = '351px';
let currentSlide = 1;
const $carouselSlides = document.createElement('div');
let duration = 500;
let timerId = null;
let autoplay = true;

const renderCarousel = ($container, images) => {
  $carouselSlides.classList.add('carousel-slides');
  const $fragment = document.createDocumentFragment();
  const $prevBtn = document.createElement('button');
  const $nextBtn = document.createElement('button');
  const $autoBtn = document.createElement('button');
  $prevBtn.classList.add('carousel-control', 'prev');
  $nextBtn.classList.add('carousel-control', 'next');
  $autoBtn.classList.add('carousel-control', 'autoplay');

  $prevBtn.innerHTML = '&laquo;';
  $nextBtn.innerHTML = '&raquo;';
  $autoBtn.innerHTML = 'stop';


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
  $container.appendChild($autoBtn);

  $carouselSlides.style.setProperty('--currentSlide', currentSlide);

  $container.style.opacity = 1;
  $container.style.width = SLIDE_WIDTH;
};

const prevSlide = total => {
  if (!autoplay) {
    clearInterval(timerId);
    timerId = null;
  }
  if (currentSlide >= 1) {
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', --currentSlide);
  }
  if (currentSlide === 0) {
    $carouselSlides.addEventListener('transitionend', () => {
      if (currentSlide !== 0) return;
      currentSlide = total;
      console.log('hi');
      $carouselSlides.style.setProperty('--duration', 0);
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    });
  }
};

const nextSlide = total => {
  if (!autoplay) {
    clearInterval(timerId);
    timerId = null;
  }

  if (currentSlide <= total) {
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', ++currentSlide);
  }

  if (currentSlide === total + 1) {
    $carouselSlides.addEventListener('transitionend', () => {
      if (currentSlide !== total + 1) return;
      currentSlide = 1;
      console.log('hi');
      $carouselSlides.style.setProperty('--duration', 0);
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    });
  }
};

const autoSliding = (images) => {
  if (autoplay) {
    timerId = setInterval(() => nextSlide(images.length), 2000);
    document.querySelector('.autoplay').innerHTML = 'stop';
  }
  else {
    clearTimeout(timerId);
    document.querySelector('.autoplay').innerHTML = 'play';

  }
};

const carousel = ($container, images) => {
  renderCarousel($container, images);
  autoSliding(images);

  $container.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('carousel-control')) return;
    if (target.classList.contains('prev')) {
      autoplay = false;
      prevSlide(images.length);
    }
    if (target.classList.contains('next')) {
      autoplay = false;
      nextSlide(images.length);
    }
    if (target.classList.contains('autoplay')) {
      autoplay = !autoplay;
      autoSliding(images, target);
    }
  });
};

carousel(document.querySelector('.carousel'), [
  'assets/movies/movie-1.jpg',
  'assets/movies/movie-2.jpg',
  'assets/movies/movie-3.jpg',
  'assets/movies/movie-4.jpg'
]);