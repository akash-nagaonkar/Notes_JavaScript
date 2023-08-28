//Objects
//Key-value pairs in curly braces

const myObj = {
  name: "akash",
  designation: "system engineer",
};

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["cricket", "reading", "movies", "coding"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

// console.log(anotherObj.action());

const vehicle = {
    wheels:4,
    engine:function(){
        return "Vrooom!"
    }
}

// const truck = Object.create(vehicle)
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels); //Inheritance
// console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 6;
car.engine = function(){
    return "Whoooosh!"
}
// console.log(car.engine());
// console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
// console.log(tesla.engine());
tesla.engine = function(){
    return "Shhhhh..."
}
// console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
}
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band){
    console.log(`On ${job}, it is ${band[job]}!`);
}

//Destructuring Objects
const {guitar : myVariable, bass : myBass} = band;
console.log(myVariable);
console.log(myBass);

const {vocals, guitar, bass, drums} = band;
console.log(guitar);

function sings({vocals}){ return `${vocals} sings!`}
console.log(sings(band));