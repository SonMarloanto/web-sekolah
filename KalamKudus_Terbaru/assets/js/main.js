$(document).ready(function () {
  $("#slider-hero").owlCarousel({
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true,
    nav: true,
    items: 1,
    navText: [
      "<i class= 'fas fa-angle-left'><i>",
      "<i class= 'fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-hero-nav",
  });

  $("#tenaga-pendidik-slider").owlCarousel({
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true,
    nav: true,
    items: 3,
    dots: false,
    margin: 20,
    navText: [
      // '<i class= "fa fa-angle-left" aria-hidden="true><i>',
      // '<i class= "fa fa-angle-right" aria-hidden="true><i>'
      "<i class= 'fas fa-angle-left'><i>",
      "<i class= 'fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-1",
  });

  $("#alumni-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 2,
    dots: false,
    margin: 20,
    navText: [
      // '<i class= "fa fa-angle-left" aria-hidden="true><i>',
      // '<i class= "fa fa-angle-right" aria-hidden="true><i>'
      "<i class= 'fas fa-angle-left'><i>",
      "<i class= 'fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-2",
  });

  $("#galeri-slider").owlCarousel({
    // autoplay : true,
    // autoplaySpeed:3000,
    loop: true,
    nav: true,
    items: 3,
    dots: false,
    margin: 20,
    navText: [
      // '<i class= "fa fa-angle-left" aria-hidden="true><i>',
      // '<i class= "fa fa-angle-right" aria-hidden="true><i>'
      "<i class= 'fas fa-angle-left'><i>",
      "<i class= 'fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-3",
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
