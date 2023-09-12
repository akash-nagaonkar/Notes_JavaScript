const box = document.querySelector(".center");
const colorText = document.querySelector(".text");

box.addEventListener("mousemove", (e) => {
  const boxLocation = box.getBoundingClientRect();
  const insideBoxLocation = e.clientX - boxLocation.left;

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
    });
  } else if (insideBoxLocation > boxLocation.width / 2 + 5) {
    colorText.innerText = "Blue";
    let redColor = gsap.utils.mapRange(
      boxLocation.width / 2,
      boxLocation.width,
      255,
      0,
      insideBoxLocation
    );

    gsap.to(box, {
      backgroundColor: `rgb(0, 0, ${redColor})`,
      color: "black",
    });
  } else {
    colorText.innerText = "Black";
    gsap.to(box, {
      backgroundColor: "black",
      color: "white",
    });
  }
});

box.addEventListener("mouseleave", ()=>{
  colorText.innerText = "Green"
  gsap.to(box, {
    backgroundColor:"green",
    color:"white"
  })
})


