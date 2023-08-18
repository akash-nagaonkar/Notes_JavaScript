//Event Listeners in JavaScript
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

//Syntax: addEventListener(event, function, useCapture)
const doSomething = () => {
  alert("Doing something!");
};

//To add event listener
h2.addEventListener("click", doSomething, false);

//To remove event listener
h2.removeEventListener("click", doSomething, false);

//Adding annonymous function
h2.addEventListener("click", (event) => {
  console.log(event.target);

  //To change content inside h2 tag
  event.target.textContent = "Clicked";
});

//Ready state change event
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState == "complete") {
    console.log("ReadyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      //   view.style.backgroundColor = "purple";
      //   event.target.style.backgroundColor = "purple";

      //This is to add and remove class of view2
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
      // console.log(view);
    },
    false
    // If it is True then event propogation start from Outside to inside and vice-versa when it is false ---> By default it is false, no need to type false
  );
  div.addEventListener(
    "click",
    (event) => {
      //   div.style.backgroundColor = "blue";
      //   event.target.style.backgroundColor = "blue";
      div.classList.toggle("blue");
      div.classList.toggle("block");
      //   console.log(div);
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation(); //To stop propogation from this event listener
      // event.target.textContent = "Clicked";
      const myText = event.target.textContent;
      console.log(+ myText);
      myText !== "My Second View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My Second View");
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event)=> {
    event.target.classList.add("height100");
  })
  nav.addEventListener("mouseout", (event)=> {
    event.target.classList.remove("height100");
  })
};
