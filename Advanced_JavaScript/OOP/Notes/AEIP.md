## Four fundamental concepts of object-oriented programming (OOP) – Abstraction, Encapsulation, Inheritance, and Polymorphism – with examples in JavaScript.

**1. Abstraction:**

**Abstraction** is the process of simplifying complex reality by modeling classes based on real-world entities and emphasizing only relevant attributes and behaviors. It allows you to focus on what an object does rather than how it does it.

*Example:*

Suppose we're modeling a car. We abstract it by defining a `Car` class with attributes like `make`, `model`, and `year`, and methods like `start()` and `stop()`:

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }
}

const myCar = new Car("Toyota", "Camry", 2022);
myCar.start();
myCar.stop();
```

In this example, we abstract the concept of a car, focusing on its essential attributes and behaviors.

**2. Encapsulation:**

**Encapsulation** is the bundling of data (attributes/properties) and methods (functions) that operate on that data into a single unit called an object. It hides the internal state and exposes only the necessary interfaces for interacting with the object.

*Example:*

We can apply encapsulation to our `Car` class by making its properties (`make`, `model`, and `year`) private and accessing them through getter and setter methods:

```javascript
class Car {
  constructor(make, model, year) {
    let _make = make;
    let _model = model;
    let _year = year;

    this.getMake = () => _make;
    this.getModel = () => _model;
    this.getYear = () => _year;
  }

  start() {
    console.log(`${this.getMake()} ${this.getModel()} started.`);
  }

  stop() {
    console.log(`${this.getMake()} ${this.getModel()} stopped.`);
  }
}

const myCar = new Car("Toyota", "Camry", 2022);
myCar.start();
myCar.stop();
console.log(myCar.getMake()); // Accessing make via getter method
```

Here, we encapsulate the properties by making them private and provide getter methods for accessing them.

**3. Inheritance:**

**Inheritance** is the mechanism that allows you to create a new class (subclass/derived class) based on an existing class (base class/parent class). The subclass inherits properties and methods from the superclass.

*Example:*

Suppose we extend our `Car` class to create a more specific class, `ElectricCar`, which adds properties and methods related to electric cars:

```javascript
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year); // Call the constructor of the parent class
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`Charging ${this.getMake()} ${this.getModel()} with ${this.batteryCapacity} kWh.`);
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2023, 100);
myElectricCar.start();
myElectricCar.charge();
```

In this example, `ElectricCar` inherits the properties and methods from the `Car` class and extends it with specific attributes and behaviors for electric cars.

**4. Polymorphism:**

**Polymorphism** is the ability to use different objects or classes in a consistent way. In JavaScript, it's achieved through method overriding and dynamic binding.

*Example:*

Suppose we have a function that takes a `Car` object and calls its `start` method:

```javascript
function startCar(car) {
  car.start();
}

const myCar = new Car("Toyota", "Camry", 2022);
const myElectricCar = new ElectricCar("Tesla", "Model S", 2023, 100);

startCar(myCar);
startCar(myElectricCar);
```

Here, the `startCar` function can accept both a regular `Car` object and an `ElectricCar` object because they both have a `start` method. This is an example of polymorphism, where different objects can be used interchangeably.

These four concepts – Abstraction, Encapsulation, Inheritance, and Polymorphism – are fundamental to object-oriented programming and help create structured, modular, and reusable code.