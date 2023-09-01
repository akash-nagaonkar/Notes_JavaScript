// Higher Order Array Loops

// for of
const myArr = ["Batman", "Ironman", "Hulk", "Thor"];

// for(const i of myArr){
//     console.log(i);
// }

// const greetings = "Hello World!"
// for(const greet of greetings){
//     if(greet == " "){
//         continue;
//     }
//     console.log(greet);
// }

// Map ----> Map is a collection of unique key-vlaue pairs
myArr.map((index) => {
  //   console.log(index);
});

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");

for (const i of map) {
  //   console.log(i);
}
/*
Output ---->
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'UK', 'United Kingdom' ]
*/

for (const [key, value] of map) {
  //   console.log(key);
}
/* 
Ouput ---->
IN
USA
UK
*/

for (const [key, value] of map) {
  //   console.log(value);
}
/* 
Ouput ---->
India
United States of America
United Kingdom
*/

const myObj = { js: "JavaScript", cpp: "C++", rb: "Rubby", py: "Python" }; // This myObj is not iterable for using 'for of' and 'map'

// We can use 'for in' loop to iterate an object
for (const key in myObj) {
  console.log(key);
}
/*
Output ---->
js
cpp
rb
py 
*/

// How could I access values from an object?
for (const key in myObj) {
  console.log(`This short form is ${key} for ${myObj[key]}`);
}
/*
Output ---->
This short form is js for JavaScript
This short form is cpp for C++
This short form is rb for Rubby
This short form is py for Python
*/

// Could I use this 'for in' loop on an array?
const languages = ["python", "java", "javascript", "c++"];

for (const i in languages) {
  console.log(languages[i]);
}
/*
Output ----> 'for in' loop on an Array does't print value directly like 'for of' but we can access values
python
java
javascript
c++
*/

// forEach loop ---> It takes element, index and array values as a parameter each time throughout the loop
const countries = ["India", "Japan", "Russia", "France"];
countries.forEach((element, index, arr) => {
  console.log(element, index, arr);
});
/*
Output ---->
India 0 [ 'India', 'Japan', 'Russia', 'France' ]
Japan 1 [ 'India', 'Japan', 'Russia', 'France' ]
Russia 2 [ 'India', 'Japan', 'Russia', 'France' ]
France 3 [ 'India', 'Japan', 'Russia', 'France' ]
*/

const myCoding = [
  {
    languageName: "JavaScript",
    languageFile: "js",
  },
  {
    languageName: "Python",
    languageFile: "py",
  },
  {
    languageName: "Java",
    languageFile: "java",
  },
];

myCoding.forEach(element => {
  console.log(element.languageName);
});

/*
Output --->
JavaScript
Python
Java 
*/