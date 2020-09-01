//Function without return
function printSum(a, b)
{
    console.log(a+b);
}

printSum(2,3);
printSum(2);//I can pass only one value in the parameter, the other value assumes undefined

//Function with return
function sum(a, b = 0)//If I don't pass the second parameter it assumes zero
{
    return a+b;
}

console.log(sum(2,3));//Shows the return in the screen
console.log(sum(2));