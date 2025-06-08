window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 760) {
    leftMenu.style.width = "0px";
    leftMenu.style.padding = "0px";

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.display = "none";
    }

    closeMenu.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    leftMenu.style.width = "auto";
    leftMenu.style.padding = "0";

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.display = "block";
    }

    closeMenu.style.display = "none";
    menuIcon.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

const profile = document.querySelector(".profile-icon");
profile.addEventListener("click", () => {
  window.location.href = "profile.html";
});

const movieCard = document.querySelectorAll(".card");
movieCard.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

let leftMenu = document.querySelector(".nav-links-left");
let navLinks = document.querySelectorAll(".nav-link");

let menuIcon = document.querySelector("#fa-bars");
let closeMenu = document.querySelector("#fa-times");
menuIcon.addEventListener("click", () => {
  leftMenu.style.width = "250px";
  leftMenu.style.padding = "100px";
  closeMenu.style.display = "block";
  setTimeout(() => {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.display = "block";
    }
  }, 100);
});

closeMenu.addEventListener("click", () => {
  leftMenu.style.width = "0px";
  leftMenu.style.padding = "0px";
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.display = "none";
  }
  closeMenu.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    leftMenu.style.width = "auto";
    leftMenu.style.padding = "0";
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.display = "block";
    }
    menuIcon.style.display = "none";
    closeMenu.style.display = "none";
  }
});
