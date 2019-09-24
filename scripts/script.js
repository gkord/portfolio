const portfolio = {};

portfolio.typed = new Typed("#typed", {
  strings: ["", "^900Front-End Developer."],
  typeSpeed: 50
});

//smoothScroll function defined
portfolio.smoothScroll = () => {
  $("a").smoothScroll({
    easing: "swing",
    speed: 800
  });
};

//Hamburger menu click function defined
portfolio.toggleButton = () => {
  $('.toggle-button').on("click", function() {
    $(this).toggleClass("button-open");
    $('.dropdown-nav').toggleClass('active')
  });
};

portfolio.closeMenu = () => {
  $('.dropdown-menu a').on('click', function(){
    $('.dropdown-nav').removeClass('active');
    $('.toggle-button').toggleClass('button-open');
  })
}

// portfolio.fixedScroll = () => {
//     $(window).scroll (function(){
//         if ($(window).scrollTop() > 30) {
//           $(".main-nav-menu").hide();
//           $(".toggle-button").show();
//           $(".dropdown-nav").hide();
//         }
//         else if ($(window).scrollTop() < 31) {
//           $(".main-nav-menu").show();
//           $('.toggle-button').hide();
//           $('.dropdown-nav').hide();
//         }
//     })
// }

//scrollTop button defined
portfolio.backToTop = () => {
  $(window).scroll(function() {
    let height = $(window).scrollTop();
    if (height > 100) {
      $(".top-button").fadeIn();
    } else {
      $(".top-button").fadeOut();
    }
  });
  $(".top-button").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
};


portfolio.init = () => {
  $(this).scrollTop(0);
  // portfolio.fixedScroll();
  portfolio.backToTop();
  portfolio.smoothScroll();
  portfolio.toggleButton();
  portfolio.closeMenu();
};

$(function() {
  portfolio.init();
});
