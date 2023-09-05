// Generate a random color

const randomColor = () => {
  const hexValue = "012456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;
const startChangingColor = () => {
  console.log("Started");
  if (!interval) {
    interval = setInterval(() => {
      document.querySelector("body").style.backgroundColor = randomColor();
    }, 1000);
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);

const stopChangingColor = () => {
  clearInterval(interval);
  interval = null;
  console.log("Stopped");
};

document.querySelector("#stop").addEventListener("click", stopChangingColor);
