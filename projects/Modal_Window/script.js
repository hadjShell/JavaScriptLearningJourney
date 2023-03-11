"use strict";

const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

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

for (let i = 0; i < 3; i++) {
    btnShowModal[i].addEventListener("click", showModal);
}
btnClose.addEventListener("click", closeModalByMouse);
overlay.addEventListener("click", closeModalByMouse);
document.addEventListener("keydown", closeModalByEscape);