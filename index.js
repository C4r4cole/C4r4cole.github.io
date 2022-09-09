// mouse click

const title = document.querySelector("h1");
const vents = document.querySelector(".vents");
const artist = document.getElementById("artistNames");
let lastScroll = 0;
const bigHeader = document.getElementById("bigHeader");

// on click the title of the site disappears on the left
title.addEventListener("click", () => {
  title.classList.toggle("titleHorde");
});

// comas and apostrophes follow the mouse from left to right and the other way round
window.addEventListener("mousemove", (e) => {
  vents.style.left = e.pageX + "px";
  // vents.style.top = e.pageY;
});

// on click the class artistNames is injected to kubrick, etc. It mainly enlarges them
artist.addEventListener("click", () => {
  artist.classList.toggle("artistNames");
  artist.style.cursor = "pointer";
});

//not finished yet and doesn't work for now

// window.addEventListener("scroll", () => {
//   if (window.scrollY > lastScroll) {
//     bigHeader.style.top = "-200px";
//   } else {
//     bigHeader.style.top = "-0px";
//   }
//   lastScroll = window.scrollY;
// });
