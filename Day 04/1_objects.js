const product1 = {}; //creating an empty object
product1.name = "Ultra Blaster Phone";//Creating an attribute called name and passing a value to it
product1.price = 4998.90;
product1["Discount"] = 0.40;//Another Way to define an attribute and your value
console.log(product1);//printing the Object product1

//Another way to create objects in JavaScript and fill that object with attributes and their values
const product2 = {
    name: "Polo Shirt",
    price: "79.90"
};

console.log(product2);//printing the Object product2

//TIPS:
//Object != JSon
'{"name": "Polo Shirt", "price": 79.90 }' //JSon Example (Textual Format)
