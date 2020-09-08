let num1 = 1;
let num2 = 2;

num1++; //num1 = num1 + 1
console.log(num1);
--num1;
console.log(num1); //num1 = num1 - 1

console.log(++num1 === num2--); //True, I added 1 in "num1" before comparison, I subtracted 1 from num2 after comparison
console.log(num1 === num2); //False, num2 doesn't have the value "2" anymore