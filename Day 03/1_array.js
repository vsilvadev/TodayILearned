console.log("Array 1");

const values = [7.7, 8.9, 6.3, 9.2];//Inserting values ​​into an array
console.log("\n"+values[0], values[3]);//Return the postion 0 and position 3 of the array
console.log("\n"+values[4]); //If trying to access non-existent index returns undefined


values[4] = 10;
console.log("\n"+values+"\n");

values[10] = 30;
console.log(values);//If you don't have previous indexes, automatically put empty

console.log("\n\nArray 2\n");
const values2 = [7.7, 8.9, 6.3, 9.2];

console.log(values2);//Shows the array
console.log(values2.length)//Shows how many elements are in the array

//TIPS:
values2.push({id: 3}, false, null, "test")//Add elements to the array - Always Avoid Mixing Data in Arrays
console.log(values2);

console.log(values2.pop());//Pop function takes the last value from the array
delete values[0];//Takes an element out of the array by index
console.log(values2);