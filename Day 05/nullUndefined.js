//NULL: represents a null or "empty" value
//UNDEFINED: represents an undefined value. It is one of the primitive types of JavaScript.

let value; //let not initialized
console.log(value); //Value's undefined because nothing was attributed in the variable

//NULL empty the variable
value = null; //Don't have value and don't point to any memory adress
console.log(value);

const product = {};
console.log(product.price);//Return undefined because the Object "product" was created but the key "price" wasn't created
console.log(product);

product.price = 3.50;
console.log(product);

//TIPS:
product.price = undefined; //Avoid to attribute undefined into an variable
console.log(!product.price); //True, because's undefined
console.log(product); //Shows the key "price" with undefined value 

product.price = null //No price
console.log(!product.price);
console.log(product);