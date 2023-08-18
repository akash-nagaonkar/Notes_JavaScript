const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursorBlur");

document.addEventListener("mousemove", (value) => {
  cursor.style.left = value.x +  "px";
  cursor.style.top = value.y +  "px";
  cursorBlur.style.left = value.x - 125 + "px";
  cursorBlur.style.top = value.y - 125 + "px";
});

const h4all = document.querySelectorAll(".nav h4");
h4all.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 8;
    cursor.style.border = "0.5px solid #fff";
    cursor.style.backgroundColor = "transparent";
    cursor.style.cursor = "pointer"
  });
});

h4all.forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
});

gsap.to(".nav", {
  backgroundColor: "#000",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opaciity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opaciity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 4,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 5,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 5,
  },
});

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 5,
  }
})
