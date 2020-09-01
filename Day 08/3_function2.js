//Store a function in a variable or constant
const printSum = function (a,b)
{
    console.log(a+b);
}

printSum(2,3);

//Arrow Function
const sum = (a,b) => {
    return a+b;
}

console.log(sum(2,3));

//Arrow Function with implicit return
const sub = (a,b) => a-b;

console.log(sub(4,2));