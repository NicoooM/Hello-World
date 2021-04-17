const travel = document.querySelector("#travel");
const landing = document.querySelector(".landing");
const logo = document.querySelector("#logo");

const extendSideBarBtn = document.querySelector(".extend-side-bar");
const sideBar = document.querySelector(".side-bar");
const triangleSideBar = document.querySelector(".triangle");

const extendAboutBtn = document.querySelector(".extend-about");
const about = document.querySelector(".about");
const closeAboutBtn = document.querySelector(".close-about");

const extendContactBtn = document.querySelector(".extend-contact");
const contact = document.querySelector(".contact");
const closeContactBtn = document.querySelector(".close-contact");

// Fermer / Ouvrir landing
travel.addEventListener("click", () => {
  landing.classList.add("closed");
  console.log("clicked");
  if (landing.classList.contains("closed")) {
    logo.addEventListener("click", () => {
      landing.classList.remove("closed");
    });
  }
});

// Fermer / Ouvrir side bar
extendSideBarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("closed");
  if (sideBar.classList.contains("closed")) {
    triangleSideBar.style.transform = "translate(-50%, -50%) rotateY(180deg)";
  }
  if (sideBar.classList.contains("closed") === false) {
    triangleSideBar.style.transform = "translate(-50%, -50%) rotateY(0deg)";
  }
});

// Fermer / Ouvrir about
extendAboutBtn.addEventListener("click", () => {
  about.classList.toggle("closed");
});
closeAboutBtn.addEventListener("click", () => {
  about.classList.toggle("closed");
});

// Fermer / Ouvrir contact
extendContactBtn.addEventListener("click", () => {
  contact.classList.toggle("closed");
});
closeContactBtn.addEventListener("click", () => {
  contact.classList.toggle("closed");
});
