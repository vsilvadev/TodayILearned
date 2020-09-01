const schoolWeight = 1.1;
const schoolWeight2 = Number("2.0");//Convert the string to a number

console.log(schoolWeight, schoolWeight2);
console.log(Number.isInteger(schoolWeight)); //See if the weight is an integer 
console.log(Number.isInteger(schoolWeight2));//See if the weight2 is an integer

const grades1 = 9.871;
const grades2 = 6.871;

const total = (schoolWeight * grades1) + (grades2 + schoolWeight2);
const average = total/(schoolWeight + schoolWeight2);

console.log(average.toFixed(2));//Sets the number of digits after the comma, rounding automatically
console.log(average.toString(2));//Convert number to string and show it in binary
console.log(typeof average);