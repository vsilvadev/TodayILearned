let isActive = false; //Literal false
console.log(isActive);

isActive = true; //Literal true 
console.log(isActive);

isActive = 1;
console.log(!!isActive)//Check if it is true or false with "!!"
 
//Behaves as true if they are being checked for true or false
console.log("True...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"Hello");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

//Behaves as false if they are being checked for true or false
console.log("\nFalse...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log("\nLast Test...")
console.log(!!("" || null || 0 || " "));//Return true, because a true value was founded