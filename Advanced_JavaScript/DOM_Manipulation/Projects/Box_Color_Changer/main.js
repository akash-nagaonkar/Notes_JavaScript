// Selecting elements from the DOM
const box = document.querySelector(".center");
const colorText = document.querySelector(".text");
const circle = document.querySelector(".circle");

// Event listener for mouse movement on the entire window
window.addEventListener("mousemove", (e) => {
  // Calculate target position for the circle based on mouse cursor
  const halfWidth = circle.getBoundingClientRect().width / 2;
  const halfHeight = circle.getBoundingClientRect().height / 2;
  const targetX = gsap.utils.mapRange(
    0,
    window.innerWidth,
    50 + halfWidth,
    window.innerWidth - 100,
    e.clientX
  );
  const targetY = gsap.utils.mapRange(
    0,
    window.innerHeight,
    50 + halfHeight,
    window.innerHeight - 100,
    e.clientY
  );

  // Animate the circle's position with motion blur based on speed
  gsap.to(circle, {
    left: targetX + "px",
    top: targetY + "px",
    ease: Power1,
    onUpdate: () => {
      // Calculate the speed of motion
      const speed = Math.sqrt(
        Math.pow(gsap.getProperty(circle, "left") - targetX, 2) +
          Math.pow(gsap.getProperty(circle, "top") - targetY, 2)
      );

      // Apply motion blur based on speed (adjust blur factor as needed)
      const blurFactor = speed / 100; // Adjust this value as needed
      circle.style.filter = `blur(${blurFactor}px)`;
    },
  });
});

// Event listeners for mouse movement and leaving inside the colored box
box.addEventListener("mousemove", (e) => {
  // Get box location and cursor position inside the box
  let boxLocation = box.getBoundingClientRect();
  let insideBoxLocation = e.clientX - boxLocation.left;

  // Change box color and text based on cursor position
  if (insideBoxLocation < boxLocation.width / 2 - 5) {
    colorText.innerText = "Red";
    let redColor = gsap.utils.mapRange(
      0,
      boxLocation.width / 2,
      255,
      0,
      insideBoxLocation
    );

    // Animate background color change to red
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

    // Animate background color change to blue
    gsap.to(box, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      color: "black",
      ease: Power4,
    });
  } else {
    colorText.innerText = "Black";

    // Animate background color change to black
    gsap.to(box, {
      backgroundColor: "black",
      color: "white",
    });
  }
});

// Event listener for mouse leaving the colored box
box.addEventListener("mouseleave", (e) => {
  colorText.innerText = "Green";

  // Animate background color change to green
  gsap.to(box, {
    backgroundColor: "green",
    color: "black",
  });
});

