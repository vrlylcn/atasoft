$(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: [
      '<img src="/images/icon-slider-prev.png" width="40" height="95" alt="Önceki Kampanya" />', 
      '<img src="/images/icon-slider-next.png" width="40" height="95" alt="Sonraki Kampanya" />'
    ],
    dots: false
  });
});
