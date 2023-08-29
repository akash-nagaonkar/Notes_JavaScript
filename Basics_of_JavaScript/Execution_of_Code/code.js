// How does js code executes?

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/* 

Step_1 - Global Execution Context ----> Allocated to 'this'

Step_2 - Memory Phase ----> Accumulate and store all variables
         val1 - undefined
         val2 - undefined
         addNum - defination
         result1 - undefined
         result2 - undefined

Step_3 - Exectuion Phase
         val1 = 10 
         val2 = 5
         addNum(Nothing will happen here in execution phase)
         result1 = Whenever function executes it makes a box containing of [New variable 
                   environment + Execution thread] this is called New Executional Context
                   Step_1 -  Memory Phase
                             val1 = undefined
                             val2 = undefined
                             total = undefined
                   Step_2 -  Execution Phase
                             num1 = 10
                             num2 = 5
                             total = 15 ----> This total returns into global execution     
                                              context
                   Step_3 -  After completion of this process New Executional Context will be 
                             deleted   
         result1 = 15

         result2 = Whenever function executes it makes a box containing of [New variable 
                   environment + Execution thread] this is called New Executional Context
                   Step_1 -  Memory Phase
                             val1 = undefined
                             val2 = undefined
                             total = undefined
                   Step_2 -  Execution Phase
                             num1 = 10
                             num2 = 2
                             total = 12 ----> This total returns into global execution     
                                              context
                   Important Note -  After completion of this process New Executional Context 
                                     will be deleted
         result2 = 12
*/
