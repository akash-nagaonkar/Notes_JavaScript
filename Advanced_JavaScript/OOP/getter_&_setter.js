// Class based get and set
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}akash`;
  }

  set password(value) {
    this._password = value;
  }
}

const akash = new User("akash@gmail.com", "abcde");
console.log(akash.email);
console.log(akash.password);

// Functional based get and set
function User2(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const user2 = new User2("ajay@gmail.com", "abcde");
console.log(user2.email);
console.log(user2.password);

// Object based get and set
const User3 = {
  _email: "rahul@gamil.com",
  _password: "abcdef",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};

const user3 = Object.create(User3);
console.log(user3.email);
console.log(user3.password);
