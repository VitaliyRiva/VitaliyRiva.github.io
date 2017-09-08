var navExtra = document.querySelector(".nav-features")
var navMain = document.querySelector(".main-nav__nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav__nav--nojs");
navExtra.classList.remove("nav-features--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav__nav--closed")) {
    navMain.classList.remove("main-nav__nav--closed");
    navMain.classList.add("main-nav__nav--opened");
  } else {
    navMain.classList.add("main-nav__nav--closed");
    navMain.classList.remove("main-nav__nav--opened");
  }
  if (navExtra.classList.contains("nav-features--closed")) {
      navExtra.classList.remove("nav-features--closed");
      navExtra.classList.add("nav-features--opened");
  } else {
      navExtra.classList.add("nav-features--closed");
      navExtra.classList.remove("nav-features--opened");
  }
});
