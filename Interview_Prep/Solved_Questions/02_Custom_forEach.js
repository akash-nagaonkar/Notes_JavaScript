/* 
Q. How can you implement a custom forEach() loop in JavaScript?
*/

const myArr = [1, 2, 3, 4, 5];

// Answer 1 --> Basic Approach
Array.prototype.customForEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Implemetation
myArr.customForEachOne((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
/*
Output -->
Element at index 0: 1
Element at index 1: 2
Element at index 2: 3
Element at index 3: 4
Element at index 4: 5
*/

// Answer 2 --> Better Approach( for an experienced developer )
Array.prototype.customForEach = function (callback, thisContext) {
  if (typeof callback !== "function") {
    throw `${callback} is not a function!`;
  }

  const length = this.length;
  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty(i)) {
      callback.call(thisContext, this[i], i, this);
    }
    i++;
  }
};

// Implementation
myArr.customForEach(function (element, index) {
  console.log(`Element at index ${index}: ${element}`);
}, this); // The second argument sets the context to 'this'
/*
Output -->
Element at index 0: 1
Element at index 1: 2
Element at index 2: 3
Element at index 3: 4
Element at index 4: 5
*/
