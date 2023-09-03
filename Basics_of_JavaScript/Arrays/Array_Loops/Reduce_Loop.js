// Reduce Loop
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitialValue = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
/*
How is it working?
--->
1st ---> initialValue = accumulator = 0
         currentValue = 1 (1st index of an array)
         accumulator + currentValue = 0 + 1 = 1

2nd ---> initialValue = accumulator = 1
         currentValue = 1 (2nd index of an array)
         accumulator + currentValue = 1 + 2 = 3

3rd ---> initialValue = accumulator = 3
         currentValue = 1 (3rd index of an array)
         accumulator + currentValue = 3 + 3 = 6

4th ---> initialValue = accumulator = 6
         currentValue = 1 (4th index of an array)
         accumulator + currentValue = 6 + 4 = 10

Final output ---> 10          
*/

console.log(sumWithInitialValue); // 10

// Another syntax to daclare reduce()
const myNums = [1, 2, 3, 4];

const myTotal = myNums.reduce((accumulator, currentValue) => {
  console.log(
    `Accumulator: ${accumulator} and Current Value: ${currentValue}. Output: ${accumulator} + ${currentValue} = ${
      accumulator + currentValue
    }`
  );
  return accumulator + currentValue;
}, 0);
// '0' is the initial value which will be assigned to accumulator initially

console.log(myTotal);
/*
Accumulator: 0 and Current Value: 1. Output: 0 + 1 = 1
Accumulator: 1 and Current Value: 2. Output: 1 + 2 = 3
Accumulator: 3 and Current Value: 3. Output: 3 + 3 = 6
Accumulator: 6 and Current Value: 4. Output: 6 + 4 = 10
---> 10
*/

// Reduce loop is used to make fuctionality of shopping cards, in most cases e-commerce applications
const shoppingCart = [
  {
    courseTitle: "Master JavaScript",
    price: 2999,
  },
  {
    courseTitle: "Quantitative Reasoning GRE",
    price: 3000,
  },
  {
    courseTitle: "Art of Communication",
    price: 599,
  },
];

const priceToPay = shoppingCart.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

console.log(`You have to pay ${priceToPay}rs`); //You have to pay 6598rs