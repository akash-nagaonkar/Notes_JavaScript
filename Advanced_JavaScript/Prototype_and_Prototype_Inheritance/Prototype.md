## Prototype

1. Go to browser console and create an object

- - > names = { name: "akash"}

2. Now type object name followed with a dot ooperator: we created name, but except name there will be other things we did not created at all.

- [Prototype]__`constructor`
  :
  ƒ Object()

`hasOwnProperty`
:
ƒ hasOwnProperty()

`isPrototypeOf`
:
ƒ isPrototypeOf()

`propertyIsEnumerable`
:
ƒ propertyIsEnumerable()

`toLocaleString`
:
ƒ toLocaleString()

`toString`
:
ƒ toString()

`valueOf`
:
ƒ valueOf()

`__defineGetter__`
:
ƒ __defineGetter__()

`__defineSetter__`
:
ƒ __defineSetter__()

`__lookupGetter__`
:
ƒ __lookupGetter__()

`__lookupSetter__`
:
ƒ __lookupSetter__()

`__proto__`
:
(...)

`get __proto__`
:
ƒ __proto__()

`set __proto__`
:
ƒ __proto__()

- If we did't created these properties where do they come from. that is where the concept of prototype comes in, every creted object gets a propety called prototype, which means whenever you create an object it gets prototype automaticallly.

1. Where it came from?

- - > javaScript by default adds a property called [prototype] to every object, so if you ever see any objexct, you can blindly say that object contains prototype.

2. What does it contains?

- - > It contains many hlper properties and methods which we can use to complete our task, let's say we create an array ans we want to know length of it, what do we do, we use .length property on array.

3. Did we created .length on that array, no! But it still contains .length. the question is how?

- - > The answer is, many properties and methods are already available to use built by javascript creators inside prototype of every object.


## In JavaScript, the prototype is an object associated with every object created using a constructor function. It forms the basis of prototype-based inheritance, which allows objects to inherit properties and methods from other objects. The prototype is used as a template or blueprint for creating new objects, and it plays a crucial role in the way JavaScript implements object-oriented programming.

Here's a breakdown of what the prototype is and how it works:

1. **Prototype Object:** Every object in JavaScript has an associated prototype object, except for the root object, which is the base of all objects and doesn't have a prototype. This prototype object is a regular JavaScript object itself and can have properties and methods, just like any other object.

2. **Constructor Functions:** When you define a constructor function (a function used to create objects with shared properties and methods), you can add properties and methods to its prototype. Objects created using this constructor will inherit those properties and methods from the prototype.

3. **Inheritance:** When you access a property or method on an object, JavaScript first checks if the object itself has that property or method. If not, it looks up the prototype chain to find the property or method in the object's prototype, and potentially further up the chain.

4. **Changing the Prototype:** You can change an object's prototype after it's been created, but it's generally not recommended due to potential complications and performance issues. It's better to define the prototype structure before creating instances.

5. **Object.prototype:** The `Object.prototype` is the prototype of all objects. It provides basic methods and properties that are inherited by all objects, such as `toString()` and `hasOwnProperty()`.

Here's a simple example to illustrate the concept:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name is Bob
```

- In this example, the `Person` constructor has a `prototype` object that contains the `sayHello` method. When `person1` and `person2` objects are created using the constructor, they inherit the `sayHello` method from the prototype, which demonstrates prototype-based inheritance.

- Overall, the prototype is a central concept in JavaScript's object-oriented programming model, allowing you to create reusable and efficient code by sharing properties and methods among objects.
