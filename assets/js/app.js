const faqs = document.querySelectorAll(".fh__idea-to-launch-content-FH001");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
// Faqs
const fh__faqs = document.querySelectorAll(".fh__faq-question");

fh__faqs.forEach((fh__faq) => {
  fh__faq.addEventListener("click", () => {
    fh__faq.classList.toggle("active");
  });
});
// navbar
const nav = document.querySelector(".fh__header-menu");
const burger = document.querySelector(".burger-menu");
const links = document.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let sections = document.querySelectorAll("section");
// scroll animation
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    // if want to use repeating animation on scroll, use this
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};
// aos data animation
AOS.init({
  offset: 300,
  duration: 1000,
});

// contact btns

const Lbtns1 = document.querySelector(
  ".fh__contact-form-categories-looking-to-btns"
);
const btns = document.getElementsByClassName("looking-to-btn");
const btns2 = document.getElementsByClassName("services-need-btn");
const btns3 = document.getElementsByClassName("monthly-budget-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace("active2", "");
    this.className += " active2";
  });
}
for (var i = 0; i < btns3.length; i++) {
  btns3[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active3");
    current[0].className = current[0].className.replace("active3", "");
    this.className += " active3";
  });
}
