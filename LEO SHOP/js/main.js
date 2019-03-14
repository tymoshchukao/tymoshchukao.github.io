$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
    });
    $('.aside-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    //     arrows: false,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   infinite: false,
    //   appendDots: $(".dots")
    });
  });