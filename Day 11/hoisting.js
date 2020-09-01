console.log("a = ", a);
var a = 2; //This variable is hoisted to the top line who realizes that the variable "a" has been created
console.log("a = ", a)

//What JavaScript did?:
/*
var a 
console.log("a = ", a);
a = 2;
console.log("a = ", a)
*/

console.log("b = ", b);
var a = 2; 
console.log("b = ", b)//Hoisting only happens when you use var


//Não usar de jeito nenhum
//Apenas para conhecimento, bom sempre conhecer
//Empurra a variável pra cima
//Já pensou o que acontece quando tento printar uma variável que eu defini apenas na linha seguinte?