**Question:**
# How can you implement a custom forEach() loop in JavaScript?

**Answer:**

To implement a custom `forEach()` loop in JavaScript, you can define a method on the `Array.prototype` object, which makes it available on all arrays. Here are two approaches to achieve this:

**Answer 1 - Basic Approach:**

```javascript
Array.prototype.customForEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
```

In this approach:
- We add a `customForEachOne` method to the `Array.prototype`.
- The method takes a `callback` function as its parameter.
- It then iterates through the array, calling the `callback` function for each element and passing the current element, index, and the array itself to the callback.

**Example:**
```javascript
const myArr = [1, 2, 3, 4, 5];

myArr.customForEachOne((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
```

**Answer 2 - Better Approach:**

```javascript
Array.prototype.forEachTwo = function (callback, thisContext) {
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
```

In this approach:
- We define a `forEachTwo` method on `Array.prototype`.
- It takes two parameters: `callback`, which is the function to execute for each element, and `thisContext`, which allows you to specify the context in which the callback should be executed.
- Inside the method, we check if the `callback` is indeed a function. If not, we throw an error.
- We then use a `while` loop to iterate through the array. Inside the loop, we use `hasOwnProperty()` to ensure that we only process actual elements, not prototype properties.
- The `callback` is executed for each element, and you can specify the `thisContext` to control the context in which the callback runs.

**Example:**
```javascript
const myArr = [1, 2, 3, 4, 5];

myArr.forEachTwo(function (element, index) {
  console.log(`Element at index ${index}: ${element}`);
}, this); // The second argument sets the context to 'this'
```

Both approaches allow you to create a custom `forEach()` loop for arrays, giving you more control over the iteration process. The second approach is more robust as it performs additional checks and allows you to specify the context.