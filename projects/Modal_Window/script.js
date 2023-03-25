"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnShowModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnScroll = document.querySelector(".btn--scroll-to");

const section1 = document.getElementById("section--1");


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

btnShowModal.forEach(e => e.addEventListener("click", showModal));
btnCloseModal.addEventListener("click", closeModalByMouse);
overlay.addEventListener("click", closeModalByMouse);
document.addEventListener("keydown", closeModalByEscape);

btnScroll.addEventListener("click", () => section1.scrollIntoView({ behavior: "smooth" }));