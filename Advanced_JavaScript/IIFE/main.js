// IIFE = Immediately Invoked Function Expression

var ans = (function(){
    var privateValue = 42;

    return{
        getter: function(){
            console.log(privateValue);
        },
        setter: function(value){
            privateValue = value;
        }
    }
})()

ans.getter()
ans.setter(24)
ans.getter()