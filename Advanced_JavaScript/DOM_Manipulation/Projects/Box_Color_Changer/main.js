const box = document.querySelector(".center");
const colorText = document.querySelector(".text");

box.addEventListener("mousemove", (e) => {
  let boxLocation = box.getBoundingClientRect();
  let insideBoxLocation = e.clientX - boxLocation.left;

  if (insideBoxLocation < boxLocation.width / 2 - 5) {
    colorText.innerText = "Red";
    let redColor = gsap.utils.mapRange(
      0,
      boxLocation.width / 2,
      255,
      0,
      insideBoxLocation
    );

    gsap.to(box, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      color: "black",
      ease: Power4,
    });
  } else if (insideBoxLocation > boxLocation.width / 2 + 5) {
    colorText.innerText = "Blue";
    let blueColor = gsap.utils.mapRange(
      boxLocation.width / 2,
      boxLocation.width,
      0,
      255,
      insideBoxLocation
    );

    gsap.to(box, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      color: "black",
      ease: Power4,
    });
  } else {
    colorText.innerText = "Black";
    gsap.to(box, {
      backgroundColor: "black",
      color: "white",
    });
  }
});

box.addEventListener("mouseleave", (e) => {
  colorText.innerText = "Green";
  gsap.to(box, {
    backgroundColor: "green",
    // background: "linear-gradient(to bottom, #3498db, #1abc9c)",
    color: "black",
  });
});
