// Static Properties

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // To stop access of createId(), use 'static
  static createId() {
    return `${Math.floor(Math.random() * 10000 + 1)}`;
  }
}

const akash = new User("Akash");
// console.log(akash.createId()); // Error --> Access of createId() has blocked by static keyword

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const userIs = new Teacher("Rahul", "rahul@gmail.com");
console.log(userIs.logMe()); // Username: Rahul
// console.log(userIs.createId()); // Error
