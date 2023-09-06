// Classe Constructor
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Methods
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const newUser = new User("Akash", "akash@gmail.com", "12345");
console.log(newUser.encryptPassword()); // 12345abc
console.log(newUser.changeUsername()); // AKASH

// Behind the scene
function NewUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

NewUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

NewUser.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const anotherUser = new NewUser("Ajay", "ajay@gmail.com", "12345");

console.log(anotherUser.encryptPassword()); // 12345abc
console.log(anotherUser.changeUsername()); // AJAY
