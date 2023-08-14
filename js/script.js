"use strict";
//! CUSTOM CURSOR
const cursorChaser = document.querySelector(".cursor-chaser");
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

document.addEventListener("mousemove", (event) => {
  cursorChaser.style.transform = `matrix(1, 0, 0, 1, ${+event.clientX} , ${+event.clientY})`;
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("cursor--active");
  });
  link.addEventListener("mouseout", () => {
    cursor.classList.remove("cursor--active");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    cursor.classList.add("cursor--active");
  });
  button.addEventListener("mouseout", () => {
    cursor.classList.remove("cursor--active");
  });
});