import './index.html';
import './page.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { videoBGInit } from './modules/videoBg';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initScrollTopButton } from './modules/scrollTopButton';

//use modules

videoBGInit();
menuControl();
locationHover();
initScrollTopButton('arrow-top');

sliderInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination',
  }
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, index) => {
  item.classList.add(`career__image-item_${index % 2 ? 'even' : 'odd'}`);
});

sliderInit('.career__slider', {
  pagination: {
    el: '.career__slider_pagination',
  },
  breakpoints: {
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: false,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      pagination: false,
    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: false,
    },
  }
});

