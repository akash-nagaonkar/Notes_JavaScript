/* 
## This ##
Value of this in global scope --> Window
Value of this in function --> Window
Value of this in method --> Object

** In any method this keyword refers to parent object **
*/

// Value of this inside function scope
function thisValue (){
    console.log(this);
}
thisValue()

// Value of this inside method scope
var obj = {
    talk : function(){
        console.log(this);
    }
}
obj.talk()

// Event listeners
var button = document.querySelector("button")

button.addEventListener("click", function(){
    console.log(this.style.color = "red");
})