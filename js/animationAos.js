AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,


  offset: 180,
  delay: 0,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});


// До анимованого блока додайте дата атрибут data-aos="fade-up"data-aos-duration="3000"
// І видалити класи dinamic_block _anim-items _anim-no-hide
// Бібліотека для анімації