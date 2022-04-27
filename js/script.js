$(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});

// Testimonials
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 4,
          nav: false,
        },
        1000: {
          items: 4,
          nav: false,
          loop: false,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
