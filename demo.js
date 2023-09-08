Array.prototype.customForEach = function (callback, thisContext) {
  if (typeof callback !== "function") {
    throw `${callback} is not a function!`;
  }

  let length = this.length;
  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty(i)) {
      callback.call(thisContext, this[i], i, this);
    }
    i++;
  }
};

const myArr = [1, 2, 3, 4, 5];
myArr.customForEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
}, this);
