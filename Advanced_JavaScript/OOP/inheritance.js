// Inheritance
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Super method is used to access value of Username from User class
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const newTeacher = new Teacher("Ajay", "ajay@gmail.com", "374973");
newTeacher.addCourse();
console.log(newTeacher);
/*
A new course was added by Ajay
{username: 'Ajay', email: 'ajay@gmail.com', password: '374973'}

Here the value of username is being inherited from User class with help of super()
*/

const anotherUser = new User("Praful");
anotherUser.logMe(); // Username is Praful
// anotherUser.addCourse() // Error --> We don't have access of addCourse() method in User class
newTeacher.logMe() // Username is Ajay --> But we have access of logMe() method from User class

console.log(newTeacher === anotherUser); // false
console.log(newTeacher instanceof Teacher); // true
console.log(newTeacher instanceof User); // true
console.log(anotherUser instanceof User); // true
