import { gsap } from "gsap";

export const menuControl = () => {
  const navigationButton = document.querySelector('.navigation__button');
  const navigationList = document.querySelector('.navigation__list');
  const navigationItems = document.querySelectorAll('.navigation__list-item');

  const timeline = gsap.timeline({ paused: true });

  timeline.fromTo(navigationList, 
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block'}
  );

  navigationItems.forEach((elem, index) => {
    const x = index % 2 ? 500 : -500;
    timeline.from(elem, {opacity: 0, x: x, duration: 1}, '-=1');
  });

  const openMenu = () => {
    navigationButton.classList.add('navigation__button_active');
    navigationList.style.display = 'block';
    timeline.play();
  };

  const closeMenu = () => {
    timeline.reverse();
  };

  timeline.eventCallback('onReverseComplete', () => {
      navigationButton.classList.remove('navigation__button_active');
  });

  navigationButton.addEventListener('click', () => {

    if (navigationButton.classList.contains('navigation__button_active')){
      closeMenu();
    } else {
      openMenu();
    }
  });

  const checkScreenSize = (event) => {
    if (event.matches) {
      gsap.set(navigationList, { opacity: 1, display: 'flex' });
      navigationItems.forEach((elem, index) => {
        gsap.set(elem, { opacity: 1, x: 0 });
      });

    } else {
      gsap.set(navigationList, { opacity: 0, display: 'none' });
      navigationItems.forEach((elem, index) => {
        const x = index % 2 ? 500 : -500;
        gsap.set(elem, {opacity: 0, x: x, duration: 1});
      });
    }
  };

  const mediaQuery = window.matchMedia('(min-width: 1280px)');
  mediaQuery.addEventListener('change', checkScreenSize);
  checkScreenSize(mediaQuery);
};