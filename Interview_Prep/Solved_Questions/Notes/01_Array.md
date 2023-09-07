**Question:**
# Take an array and loop through the array's original properties. How can this be done?

- Are you asking if, when there are extra properties on an array, it should ignore these extra properties and loop through only the original properties? This would involve considering Prototypes, right? Is that correct?

**Answer:**

When working with arrays in JavaScript, it's important to distinguish between the original properties (array elements) and any additional properties that may have been added to the array prototype or through other means.

In the code you provided:

```javascript
Array.prototype.extraProperty = "Akash";
const myNewArray = [1, 2, 3, 4, 5];
```

You've added an `extraProperty` to the `Array` prototype. While this makes `extraProperty` accessible to all arrays, it's not considered an "original" property of individual arrays.

To loop through only the original properties (array elements) of an array, you can use the `hasOwnProperty()` method. Here's how it can be done:

```javascript
for (let i in myNewArray) {
  if (myNewArray.hasOwnProperty(i)) {
    console.log(i); // 0 1 2 3 4
  }
}
```

In this loop, `hasOwnProperty(i)` checks whether the property `i` belongs directly to `myNewArray` (i.e., it's an original property) and not to its prototype or any other object. This way, you ensure that you're only working with the array's original properties.

So, to answer your question, `hasOwnProperty()` is a useful method to loop through an array's original properties and ignore any extra properties that may exist on the array's prototype or elsewhere.
