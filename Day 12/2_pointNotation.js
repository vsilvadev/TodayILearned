console.log(Math.ceil(6.1));//Using dot to acess a function inside Math

const obj1 = {};
obj1.name = "Ball";//Using dot to acess the name Key in the obj1 and put the value "Ball"
console.log(obj1.name);

function Obj (name) {
    this.name = name; //this.name = The name associated with the created object 
}

const obj2 = new Obj("Table"); //Create an obj2
const obj3 = new Obj("Window"); //Create an obj3
console.log(obj2.name); //Searching and print for obj2 name
console.log(obj3.name); //Searching and print for obj3 name