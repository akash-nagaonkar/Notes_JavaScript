// Promises

// One
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username: "akash_nagaonkar", email: "akash@gmail.com" });
    }, 1000);
  });
  
  promiseOne.then((user) => console.log(user.username));
  
  // Two
  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: "akash-nagaonkar", email: "akash@gamil.com" });
      } else {
        reject("ERROR: Something went wrong while fetching data!");
      }
    }, 1000);
  });
  
  // Database chaining
  promiseTwo
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      console.log(username);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Three
  const promiseThree = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
  
    setTimeout(() => {
      if (randomNumber < 5) {
        resolve("The number is less than 5. Resolved!");
      } else if (randomNumber === 5) {
        resolve("The number is equal to 5. Resolved!");
      } else {
        reject("The number is greater than 5. Rejected!");
      }
    }, 1000);
  });
  
  promiseThree
    .then((data) => {
      console.log(data);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("The promise is either resolved or rejected!");
    }); // Default
  
  // Four
  const promiseFour = new Promise((resolved, reject) => {
    let error = false;
    setTimeout(() => {
      if (!error) {
        resolved({ language: "JavaScript", framework: "React" });
      } else {
        reject("ERROR: Something went wrong!");
      }
    });
  });
  
  // How to use async and await with promise?
  consumePromiseFour = async () => {
    try {
      const data = await promiseFour;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  consumePromiseFour(); // {language: 'JavaScript', framework: 'React'}
  
  // Fetching data from API with try and catch
  const getAllUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getAllUsers();
  
  // Fetching data from API with then and catch
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });