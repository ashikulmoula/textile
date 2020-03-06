(function($) {
  "use strict";

  jQuery(document).ready(function($) {
    $(".homepage-slides").owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      loop: true,
      navText: [
        "<i class='fa fa-angle-left'</i>",
        "<i class='fa fa-angle-right'</i>"
      ],
      autoplay: false
    });

    $(".counter").counterUp({
      delay: 10,
      time: 10000
    });
  });

  jQuery(window).load(function() {});
})(jQuery);

jQuery(document).ready(function($) {});
