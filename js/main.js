$(document).ready(function () {
  $(window).scroll(function () {
    var pageY = $(window).scrollTop();
    var sec_2_top = $(".section_2").offset().top;

    if (pageY >= sec_2_top) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  var swiper = new Swiper(".swiper_5", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 3.2,
      },
    },
  });
});
