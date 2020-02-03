$(document).ready(function() {
  $(".construction-slide").slick({
    arrows: true,
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
        }
      }
    ]

  });

})



$(document).ready(function() {
  $(".we-build-slide").slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    // asNavFor: '.we-build-menu-slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },

      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
        }
      }
    ]

  });

})


$(document).ready(function() {
  $(".we-build-menu-slider").slick({
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    dots: false,
    infinite: true,
    asNavFor: '.we-build-slide',
    focusOnSelect: true,
    variableWidth: true
  });

})
