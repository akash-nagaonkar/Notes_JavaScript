const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const messageText = document.getElementById("message");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  if (inputBox.value === "") {
    displayMessage("Please type a task to add it in list", "error");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");

    li.innerHTML = `<p>${inputBox.value}</p>`;
    list.appendChild(li);
    displayMessage(
      `Your task ${inputBox.value.toUpperCase()} is added!`,
      "success"
    );

    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      let deletedTask = e.target.parentElement.firstElementChild.innerText;
      e.target.parentElement.remove();
      displayMessage(
        `Your task ${deletedTask.toUpperCase()} is deleted!`,
        "error"
      );
      saveData();
    }
  },
  false
);


const saveData = () => {
  localStorage.setItem("data", list.innerHTML);
};

const displayTasks = () => {
  list.innerHTML = localStorage.getItem("data");
};

const displayMessage = (message, className) => {
  messageText.innerHTML = `<p class=${className}>${message}</p>`;
  setTimeout(()=>{
    messageText.innerHTML = ""
  }, 3000)
};

displayTasks();
