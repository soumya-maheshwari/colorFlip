const colors = [
  "rgb(85, 138, 85)",
  " rgb(160, 107, 107)",
  "rgba(133,190,230)",
  "#f15025",
];

const btn = document.getElementById("btnn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  // get random number between 0 and 3
  const randomNumber = generateRandoMNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function generateRandoMNumber() {
  return Math.floor(Math.random() * colors.length);
}
