const travel = document.querySelector("#travel");
const landing = document.querySelector(".landing");
const logo = document.querySelector("#logo");

travel.addEventListener("click", () => {
  landing.classList.add("closed");
  console.log("clicked");
  if (landing.classList.contains("closed")) {
    logo.addEventListener("click", () => {
      landing.classList.remove("closed");
    });
  }
});
