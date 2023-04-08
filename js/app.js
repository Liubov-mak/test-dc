"use strict";

var navLinks = document.querySelectorAll('.nav a ');
if (navLinks) {
  var removeActive = function removeActive() {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
  };
  navLinks.forEach(function (e) {
    e.addEventListener('click', function (event) {
      if (event.target.classList.contains('active')) {
        removeActive();
      } else {
        removeActive();
        event.target.classList.add('active');
      }
    });
  });
}
var toggleMenu = function toggleMenu() {
  var nav = document.querySelector('.nav'),
    links = document.querySelectorAll('.nav a'),
    burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay');
  burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.classList.toggle('active');
  });
  links.forEach(function (el) {
    el.addEventListener('click', function () {
      nav.classList.remove('active');
      overlay.classList.remove('active');
      burger.classList.remove('active');
    });
  });
};
toggleMenu();
var slider = function slider() {
  new Swiper(".goods-slider", {
    spaceBetween: 0,
    pagination: {
      clickable: true
    },
    autoplay: false,
    loop: true,
    speed: 600,
    navigation: {
      prevEl: ".next",
      nextEl: ".prev"
    },
    dots: false,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      550: {
        slidesPerView: 2
      },
      700: {
        slidesPerView: 3
      },
      900: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 5
      }
    }
  });
};
slider();