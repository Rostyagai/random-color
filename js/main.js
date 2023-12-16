const background = document.querySelector("body");
const title = document.querySelector(".title");

const GenerateRandomColor = () => {
  const randomR = (Math.random() * 225 + 1).toFixed(0);
  const randomG = (Math.random() * 225 + 1).toFixed(0);
  const randomB = (Math.random() * 225 + 1).toFixed(0);

  const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  background.style.backgroundColor = randomColor;
  title.textContent = randomColor;
};

window.addEventListener("click", GenerateRandomColor);
