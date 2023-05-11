import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { videoBGInit } from './modules/videoBg';
import { menuControl } from './modules/menuControl';

//use modules

videoBGInit();

menuControl();

sliderInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination',
  }
});

sliderInit('.career__slider', {
  pagination: {
    el: '.career__slider_pagination',
  },
  breakpoints: {
    768: {
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

