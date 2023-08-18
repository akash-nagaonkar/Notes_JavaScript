/* 
## Call, Apply and Bind ## 
--> The call, apply, and bind methods in JavaScript are used to control the value of the this keyword within a function. They are particularly useful when you want to explicitly set the context in which a function is executed or when you want to partially apply arguments to a function.
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  const greet = function(message) {
    console.log(message + ' ' + this.fullName());
  };
  
  // Using call
  greet.call(person, 'Hello'); // Output: Hello John Doe
  
  // Using apply
  greet.apply(person, ['Hi']); // Output: Hi John Doe
  
  // Using bind
  const greetJohn = greet.bind(person);
  greetJohn('Hey'); // Output: Hey John Doe