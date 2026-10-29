"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
const mobileViewport = window.matchMedia("(max-width: 760px)");

if (menuToggle && navigation) {
  function setMenuOpen(open) {
    menuToggle.setAttribute("aria-expanded", String(open));
    navigation.hidden = mobileViewport.matches && !open;
    menuToggle.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
  }

  function syncNavigation() {
    menuToggle.hidden = !mobileViewport.matches;
    setMenuOpen(false);
  }

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobileViewport.matches) {
      setMenuOpen(false);
      menuToggle.focus({ preventScroll: true });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  mobileViewport.addEventListener("change", syncNavigation);
  syncNavigation();
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
