// JavaScript Errors and Error Handling
"use strict";

const name = "Akash"; //Reference Error: Variable is not defined --> If we do not use const or let
console.log(name);

// name = "Joe"; //Uncaught TypeError: Assignment to constant variable --> We can not change value of const

const makeError = () => {
  let i = 1;

  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }

      console.log("Even number!");
      // const name = "Akash"
      // name = "Joe"
      //   throw new Error("This is a custom error!");
    } catch (error) {
      // console.log(error);
      // console.warn(error);
      // console.table(error);
    //   console.error(error.name);
    //   console.error(error.message);
      console.error(error.stack);
    } finally {
      console.log("....finally!");
      i++;
    }
  }
};

makeError();
