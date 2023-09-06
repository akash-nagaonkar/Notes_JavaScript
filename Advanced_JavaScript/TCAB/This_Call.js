// This and call
function SetUsername(username) {
  // Complex DB calls
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const newUser = new createUser("Akash", "akash@gmail.com", "12345");
console.log(newUser);
/* 
Before using call() 
--> Called 
    {email: 'akash@gmail.com', password: '12345'} 

Username is not being displayed, because the function SetUsername() that we are called inside createUser() is not being executed. 

In order to call SetUseranme(), we explicitly use call() method on that function.

After using call(this, username) 
--> Called
    {username: 'Akash', email: 'akash@gmail.com', password: '12345'}
*/
