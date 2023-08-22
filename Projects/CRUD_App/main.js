const addBtn = document.querySelector("#addButton");
const parentList = document.querySelector("#parentList");

addBtn.addEventListener("click", (event) => {
  if (parentList.children[0].id == "emptyMsg") {
    parentList.children[0].remove();
  }
  const inputText = document.querySelector("#inputText");

  const newLi = document.createElement("li");
  newLi.className = "list-group-item d-flex justify-content-between";
  newLi.innerHTML = `<h3 class="flex-grow-1">${inputText.value}</h3>
  <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
  <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;

  parentList.appendChild(newLi);
});

const removeChapter = (currentElement) => {
  currentElement.parentElement.remove();
  if (parentList.children.length <= 0) {
    let newEmptyMessage = document.createElement("h3");
    newEmptyMessage.id = "emptyMsg";
    newEmptyMessage.className =
      "d-flex align-items-center justify-content-center";
    newEmptyMessage.textContent = "Nothing is here. Please add a Chapter!";
    parentList.appendChild(newEmptyMessage);
  }
};

const editChapter = (currentElement) => {
  if (currentElement.textContent == "Done") {
    currentElement.textContent = "Edit";
    const currentChapterName = currentElement.previousElementSibling.value;
    const currentHeading = document.createElement("h3");
    currentHeading.className = "flex-grow-1";
    currentHeading.textContent = currentChapterName;
    currentElement.parentElement.replaceChild(
      currentHeading,
      currentElement.previousElementSibling
    );
  } else {
    currentElement.textContent = "Done";
    const currentChapterName =
      currentElement.previousElementSibling.textContent;
    const currentInput = document.createElement("input");
    currentInput.type = "text";
    currentInput.className = "form-control";
    currentInput.placeholder = "Chapter name";
    currentInput.value = currentChapterName;

    currentElement.parentElement.replaceChild(
      currentInput,
      currentElement.previousElementSibling
    );
  }
};
