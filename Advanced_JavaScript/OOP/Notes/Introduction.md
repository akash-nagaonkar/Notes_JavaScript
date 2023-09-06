## OOP ##

Object-Oriented JavaScript (OOJS) is an approach to writing JavaScript code that leverages the principles of object-oriented programming (OOP). It allows you to model and organize your code using objects and classes, making it more structured, reusable, and maintainable. OOJS provides a way to create objects, define their properties and methods, and establish relationships between objects.

Here are the core concepts of Object-Oriented JavaScript:

1. **Objects:**

   - In JavaScript, objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects, functions, or primitive values (like numbers and strings).
   - Objects can represent real-world entities or abstract concepts and can have properties and methods.

2. **Classes and Constructors:**

   - JavaScript introduced the `class` keyword in ECMAScript 2015 (ES6) for defining classes. A class serves as a blueprint for creating objects with similar properties and methods.
   - Constructors are special functions used to initialize object instances created from a class. They are defined within the class using the `constructor` method.
   - Example:

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
     greet() {
       console.log(
         `Hello, my name is ${this.name} and I am ${this.age} years old.`
       );
     }
   }
   ```

3. **Instances:**

   - Objects created from a class are called instances. Each instance has its own set of properties and can call the methods defined in the class.
   - Example:

   ```javascript
   const person1 = new Person("Alice", 30);
   const person2 = new Person("Bob", 25);

   person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
   person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
   ```

4. **Inheritance:**

   - OOJS supports inheritance, allowing you to create new classes based on existing ones.
   - The `extends` keyword is used to create a subclass that inherits properties and methods from a parent class.
   - Example:

   ```javascript
   class Student extends Person {
     constructor(name, age, grade) {
       super(name, age); // Call the parent class constructor
       this.grade = grade;
     }
     study() {
       console.log(`${this.name} is studying.`);
     }
   }
   ```

5. **Encapsulation:**

   - Encapsulation refers to the bundling of data (properties) and the methods (functions) that operate on that data into a single unit called an object.
   - It allows you to hide the internal state of an object and expose only the necessary interfaces.

6. **Polymorphism:**

   - Polymorphism is the ability to use different objects or classes in a consistent way. In JavaScript, it's achieved through method overriding and dynamic binding.

7. **Abstraction:**
   - Abstraction involves simplifying complex reality by modeling classes based on real-world entities, emphasizing only relevant attributes and behaviors.

Object-Oriented JavaScript helps organize code, reduce redundancy, and improve code maintainability. It's particularly useful for building large-scale applications, libraries, and frameworks.
