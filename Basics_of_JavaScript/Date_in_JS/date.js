// Date and time in JavaScript

let myDate = new Date();
console.log(myDate.toString()); // Sun Aug 27 2023 14:02:18 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sun Aug 27 2023
console.log(myDate.toLocaleDateString()); // 8/27/2023
console.log(myDate.toISOString()); // 2023-08-27T08:33:39.532Z
console.log(myDate.toJSON()); // 2023-08-27T08:33:39.532Z
console.log(myDate.getUTCDate()); // 27
console.log(typeof myDate); // object

// Dclaring a date with YYYY/MM/DD format
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate); // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// Declaring a date with time
let newDate = new Date(2023, 0, 23, 5, 3);
console.log(newDate); // 2023-01-22T23:33:00.000Z
console.log(newDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// Declaring a date with specific values
let specificDate = new Date("2023-01-14");
console.log(specificDate.toLocaleString()); // 1/14/2023, 5:30:00 AM

// Declaring a date with MM/DD/YYYY format
let indianFormatDate = new Date("01-23-2023");

// Timestamps in Date
let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1693137426454 ---> This long digit value is milli-second value
console.log(indianFormatDate.getTime()); // 1674412200000 ---> Value in Milli-Seconds

// Convert milli-seconds into the seconds
console.log(Math.floor(Date.now() / 1000)); // 1693137736 ---> Value in seconds

// Exploring more Date methods
let anotherOneDate = new Date();
console.log(anotherOneDate.getFullYear()); // 2023
console.log(anotherOneDate.getTime()); // 1693138009063
console.log(anotherOneDate.getMonth() + 1); // 8
console.log(anotherOneDate.getHours()); // 17
console.log(anotherOneDate.getDate()); // 27

// Customization of a Method
anotherOneDate.toLocaleDateString("default", {
  // We can define properties here specifically
  weekday: "long",
});
