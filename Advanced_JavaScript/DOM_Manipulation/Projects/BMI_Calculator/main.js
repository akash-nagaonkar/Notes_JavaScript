// Constants
const form = document.querySelector("form");

// Don't daclre these constants globally
// const height = parseInt(document.querySelector("#height").value);
// const weight = parseInt(document.querySelector("#weight").value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Inputs values, height and weight
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height and height!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight and height!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the results
    results.innerHTML = bmi
  }
});
