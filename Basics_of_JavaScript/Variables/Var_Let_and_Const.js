// Var, Let and Const
// Var are changable. It can be reasigned with same name.
// Const are not changable. It can not be reasigned.

//Global scope
var x = 3;
let y = 4;
const z = 5;

//Local scope
{
  let y = 20;
  console.log(y);
}

function myFunction() {
  const z = 10;
  console.log(y);

  //Local scope
  {
    let y = 30;
    console.log(y);
  }
}
myFunction();


