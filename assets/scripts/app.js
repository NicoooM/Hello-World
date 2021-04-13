const travel = document.querySelector("#travel");
const landing = document.querySelector(".landing");

travel.addEventListener("click", () => {
  landing.classList.toggle("closed");
});
