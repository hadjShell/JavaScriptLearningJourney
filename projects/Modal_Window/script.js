"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnShowModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnScroll = document.querySelector(".btn--scroll-to");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const containerHeader = document.querySelector(".header");
const containerNav = document.querySelector(".nav");
const containerNavLinks = document.querySelector(".nav__links");
const containerTab = document.querySelector(".operations__tab-container");

const sections = document.querySelectorAll(".section");
const section1 = document.getElementById("section--1");

const lazyImgs = document.querySelectorAll(".features__img");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

// Event handlers
// Event handler for show modal buttons
function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// Event handler for close modal by mouse
function closeModalByMouse() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Event handler for close modal by escape
function closeModalByEscape(e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    closeModalByMouse();
}

// Event listeners
btnShowModal.forEach(e => e.addEventListener("click", showModal));
btnCloseModal.addEventListener("click", closeModalByMouse);
overlay.addEventListener("click", closeModalByMouse);
document.addEventListener("keydown", closeModalByEscape);

btnScroll.addEventListener("click", () =>
  section1.scrollIntoView({ behavior: "smooth" })
);

// sticky nav
const obsCallbackFn = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) containerNav.classList.add("sticky");
  else containerNav.classList.remove("sticky");
};
const obsOptions = {
  root: null,
  threshold: 1,
  rootMargin: `${containerNav.getBoundingClientRect().height}px`,
};
const navObserver = new IntersectionObserver(obsCallbackFn, obsOptions);
navObserver.observe(containerHeader);

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const revealOptions = {
  root: null,
  threshold: 0.2,
};
const secObserver = new IntersectionObserver(revealSection, revealOptions);
sections.forEach(section => secObserver.observe(section));

// Lazy img
const revealLazyImg = function (entries, observer) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove("lazy-img");
  observer.unobserve(entry.target);
};
const imgOptions = {
  root: null,
  threshold: 0.1,
};
const lazyImgObserver = new IntersectionObserver(revealLazyImg, imgOptions);
lazyImgs.forEach(img => lazyImgObserver.observe(img));

// Event delegation
containerNavLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
containerNavLinks.addEventListener("mouseover", function (e) {
  const hovered = e.target.closest(".nav__item");
  if (!hovered) return;

  [...this.children].forEach(e => {
    if (e !== hovered) e.style.opacity = "0.5";
  });
});
containerNavLinks.addEventListener("mouseout", function (e) {
  const outed = e.target.closest(".nav__item");
  if (!outed) return;

  [...this.children].forEach(e => (e.style.opacity = "1.0"));
});

containerTab.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  // Active tab
  [...this.children].forEach(btn =>
    btn.classList.remove("operations__tab--active")
  );
  clicked.classList.add("operations__tab--active");
  // Active content
  const contents = [...this.parentElement.children];
  contents.forEach(content => {
    content.classList.remove("operations__content--active");
    if (
      content.classList.contains(`operations__content--${clicked.dataset.tab}`)
    )
      content.classList.add("operations__content--active");
  });
});

slider.style.overflow = "visible";
const pos = [-1, 0, 1];
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * pos[i]}%)`));
function toLeft() {
  pos.forEach((_, i) => {
    pos[i]--;
    if (pos[i] < -1) pos[i] = 1;
  });
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * pos[i]}%)`)
  );
}
function toRight() {
  pos.forEach((_, i) => {
    pos[i]++;
    if (pos[i] > 1) pos[i] = -1;
  });
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * pos[i]}%)`)
  );
}
btnLeft.addEventListener("click", toLeft);
btnRight.addEventListener("click", toRight);
