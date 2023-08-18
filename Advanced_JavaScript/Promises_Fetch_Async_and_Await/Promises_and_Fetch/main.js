/*
=> Fetch API <=

#Fetch API requires a discussion of --> Callbacks, Promises, Thenables, and Async/Await
*/

//Callbacks function
function firstFunction(parameters, callback) {
  //do stuff
  callback();
}

// Promises --> 3 states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes, Resolved the promise!");
  } else {
    reject("No, Rejected the promise.");
  }
});

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

// myNextPromise.then(value => {
//     console.log(value);
// })
// myPromise.then(value => {
//     console.log(value);
// })

//Pending state of promises

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

//Pending
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });

//This line does not wait on users code
console.log(users);
