"use strict";
//! CUSTOM CURSOR
const cursorChaser = document.querySelector(".cursor-chaser");
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

document.addEventListener("mousemove", (event) => {
  cursorChaser.animate(
    { transform: `matrix(1, 0, 0, 1, ${+event.clientX} , ${+event.clientY})` },
    {
      duration: 300,
      fill: "forwards",
    }
  );
  // cursorChaser.style.transform = `matrix(1, 0, 0, 1, ${+event.clientX} , ${+event.clientY})`;
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

//! HEADER-TITLE ANIMATION
const headerTitle = document.querySelector(".main-header__title");
const letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

let interval = null;
function letterAnimation(element) {
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= element.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 30);
}
document.addEventListener("DOMContentLoaded", () => {
  letterAnimation(headerTitle);
});
headerTitle.addEventListener("mouseover", () => {
  letterAnimation(headerTitle);
});

//! BURGER BUTTON AND MENU OPENING
const menuOpenButton = document.querySelector(".main-header__mobile-menu-open-btn");
const menuCloseButton = document.querySelector(".hidden-nav__close-btn");
const hiddenNavWrap = document.querySelector(".hidden-nav-wrap");
const hiddenNav = document.querySelector(".hidden-nav");

menuOpenButton.addEventListener("click", () => {
  hiddenNavWrap.classList.add("hidden-nav-wrap--opened");
  menuOpenButton.classList.add("main-header__mobile-menu-open-btn--active");
  setTimeout(() => {
    hiddenNav.classList.add("hidden-nav--visible");
    menuCloseButton.classList.add("hidden-nav__close-btn--visible");
  }, 800);
  setTimeout(() => {
    menuOpenButton.classList.add("main-header__mobile-menu-open-btn--active-slide");
  }, 300);
});

menuCloseButton.addEventListener("click", () => {
  hiddenNav.classList.remove("hidden-nav--visible");
  menuCloseButton.classList.remove("hidden-nav__close-btn--visible");
  setTimeout(() => {
    hiddenNavWrap.classList.remove("hidden-nav-wrap--opened");
    menuOpenButton.classList.remove("main-header__mobile-menu-open-btn--active-slide");
  }, 800);
  setTimeout(() => {
    menuOpenButton.classList.remove("main-header__mobile-menu-open-btn--active");
  }, 300);
});

//! CLOSING MENU AND RESET ON RESIZE TO DESKTOP
window.addEventListener("resize", () => {
  if (window.innerWidth > 880) {
    menuCloseButton.click();
  }
});
