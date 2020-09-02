console.log("a = ", a);
var a = 2; //This variable is hoisted to the top line who realizes that the variable "a" has been created
console.log("a = ", a);

//What JavaScript did?:
/*
var a 
console.log("a = ", a);
a = 2;
console.log("a = ", a);
*/

console.log("b = ", b);
var b = 2; 
console.log("b = ", b)//Hoisting only happens when you use var

