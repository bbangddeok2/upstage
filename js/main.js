$(document).ready(function () {
  let scrollY = 0;

  function updateHeaderBg() {
    const pageY = $(window).scrollTop();
    const $sec2 = $(".section_2");

    // section_2 없으면 헤더 배경 처리 안 함(안전)
    if (!$sec2.length) return;

    const sec2Top = $sec2.offset().top;

    if (pageY >= sec2Top) $("header").addClass("scrolled");
    else $("header").removeClass("scrolled");
  }

  // ✅ 처음 로드 시에도 한 번 실행
  updateHeaderBg();

  $(window).on("scroll", function () {
    // 메뉴 열려있을 땐 헤더 bg 판단 안 함(깜빡임/오작동 방지)
    if ($("body").hasClass("menu_open")) return;
    updateHeaderBg();
  });

  $(".ham_icon .hamburger_btn").on("click", function (e) {
    e.preventDefault();

    scrollY = window.scrollY || $(window).scrollTop();

    // ✅ 메뉴 열릴 때는 scrolled 잠깐 제거 (검정 덮임 느낌 방지)
    $("header").removeClass("scrolled");

    $("body")
      .addClass("menu_open")
      .css("top", -scrollY + "px");
    $(".mobile_menu").addClass("active");
    $(".ham_icon").addClass("hide");
  });

  $(".mobile_menu_close").on("click", function (e) {
    e.preventDefault();

    $(".mobile_menu").removeClass("active");
    $(".ham_icon").removeClass("hide");

    $("body").removeClass("menu_open").css("top", "");
    window.scrollTo(0, scrollY);

    // ✅ 메뉴 닫힌 후 현재 스크롤 기준으로 헤더 다시 계산
    updateHeaderBg();
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

  // ✅ # 링크는 위로 점프하니까 전체적으로 막아버리는 게 편함
  $(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  var swiper = new Swiper(".swiper_5", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: { spaceBetween: 16, slidesPerView: 1.5 },
      768: { slidesPerView: 3.2 },
    },
  });
});
