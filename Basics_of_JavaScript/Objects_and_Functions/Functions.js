// Functions - Provides reusable codes

// Function Declaration Syntax
function getUserFromEmail(email){
  return email.slice(0, email.indexOf("@"))
}

console.log(getUserFromEmail("PlayerOne@gmail.com"));

//Another way to write a function
const getUserFromEmail1 = function(email){
  return email.slice(0, indexOf("@"))
}

console.log(getUserFromEmail("Akash@gmail.com"));

//Arrow Function
const toProperCase = (name) =>{
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("aKASh"));