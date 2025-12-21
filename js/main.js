$(document).ready(function () {
  $(window).on("scroll", function () {
    var pageY = $(window).scrollTop();
    var sec2 = $(".section_2");
    var sec_2_top = sec2.length ? sec2.offset().top : 200;
    if (pageY >= sec_2_top) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
  $(".ham_icon .hamburger_btn").on("click", function () {
    $(".mobile_menu").addClass("active");
    $(".ham_icon").addClass("hide");
    $("body").addClass("menu_open");
  });

  $(".mobile_menu_close").on("click", function () {
    $(".mobile_menu").removeClass("active");
    $(".ham_icon").removeClass("hide");
    $("body").removeClass("menu_open");
  });

  $(".mobile_main").on("click", function () {
    var $subMenu = $(this).siblings(".mobile_sub");
    var $mobileNav = $(this).closest(".mobile_nav");

    if ($subMenu.hasClass("active")) {
      $subMenu.removeClass("active");
      $mobileNav.removeClass("active");
    } else {
      $(".mobile_sub").removeClass("active");
      $(".mobile_nav").removeClass("active");
      $subMenu.addClass("active");
      $mobileNav.addClass("active");
    }
  });

  $(".mobile_menu > ul > li:last-child a").on("click", function () {
    $(".mobile_menu").removeClass("active");
    $(".ham_icon").removeClass("hide");
    $("body").removeClass("menu_open");
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
