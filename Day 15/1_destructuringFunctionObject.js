function rand( { min = 0, max = 1000}) { //Sending object as parameter to function and this function does the destructuring of min and max
    const value = Math.random() * (max-min) + min;
    return Math.floor(value);
}

const obj = { max: 50, min: 40 }; 
console.log(rand(obj));
console.log(rand({min: 955 })); //If I don't send the value of "max" the value will be 1000 by default

//Object
function rand( { min = 0, max = 1000})
//Array
function rand( [ min = 0, max = 1000])
