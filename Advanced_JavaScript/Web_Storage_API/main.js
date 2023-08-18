//Web Stoarage API

//Not part of DOM - refers to the window API
//Available to JS via the global variable: window

//We do not have to type window. It is implied.

const myArray = ["Eat", "Sleep", "Code"];
const myObject = {
  name: "akash",
  hobbies: ["Eat", "Sleep", "Code"],
  logName: function () {
    console.log(this.name);
  },
};

//Storing the data in the object using JSON
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
localStorage.setItem("myLocalStore", JSON.stringify(myArray));

//JSON.parse converts passed data from string into the object
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);

//To remove myLocatStore
// localStorage.removeItem("myLocalStore");

//To clear myLocalStore
// localStorage.clear();

// const key = localStorage.key(0);
const storeLength = localStorage.length;


const myLocalData = JSON.parse(sessionStorage.getItem("myLocalStore"));
// console.log(myLocalData);
// console.log(key);
console.log(storeLength);
