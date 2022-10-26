"use strict";

function slider(element, options) {
  if (typeof options === "undefined") {
    options = {};
  }
  new Swipper(element, {
    slidesPerView: options.slidesPerView ? options.slidesPerView : "auto",
    spaceBetween: options.spaceBetween ? options.spaceBetween : 0,
    centeredSlides: options.centeredSlides ? options.centeredSlides : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

window.addEventListener("load", function () {
  slider(".swiper-container");
  slidesPerView: 1;
});
