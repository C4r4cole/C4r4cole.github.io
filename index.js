// mouse click

const title = document.querySelector("h1");
const vents = document.querySelector(".vents");
const artist = document.getElementById("artistNames");

title.addEventListener("click", () => {
  title.classList.toggle("titleHorde");
});

window.addEventListener("mousemove", (e) => {
  vents.style.left = e.pageX + "px";
  // vents.style.top = e.pageY;
});

artist.addEventListener("click", () => {
  artist.classList.toggle("artistNames");
  artist.style.cursor = "pointer";
});
