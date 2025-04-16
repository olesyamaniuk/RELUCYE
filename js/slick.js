$(function () {
  $(".q-t-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-t-reviews-list-left",
    nextArrow: ".q-t-reviews-list-right",
  });
});
