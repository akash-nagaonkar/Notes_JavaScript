// IIFE = Immediately Invoked Function Expression

// UseCase --> Whenever there is a problem with pollution of global scope, we use IIFE in order to remove or reduce the pollution of global scope or to manage declaration of variables.

// To end Immediately Invoked Function we must use ';' in the end

// Named IIFE
(function func() {
  console.log("DB Connected!");
})(); // DB Connected!

// Unamed IIFE
(function () {
  console.log("DB Connected!");
})(); // DB Connected!

(() => {
  console.log("DB Connected too!");
})(); // DB Connected too!

// Passing argument and parameter
(arrowFunc = (name) => {
  console.log(`My name is ${name}`);
})("akash"); // My name is akash

// Getter and setter in IFFE, used to encrypt data or properties
var ans = (function () {
  var privateValue = 42;

  return {
    getter: function () {
      console.log(privateValue);
    },
    setter: function (value) {
      privateValue = value;
    },
  };
})();

ans.getter();
ans.setter(24);
ans.getter();
