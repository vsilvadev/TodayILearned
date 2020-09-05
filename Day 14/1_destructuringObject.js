const human = {
    name: "Vitor",
    age: 19,
    address: {
        street: "Street ABC",
        number: 1000
    }
}

const { name, age } = human; //Take from the object: Name and Age
console.log(name, age);
//remover atributos de dentro de uma estrutura

const { name: n, age: a } = human; //Taking from the object and giving to them new names
console.log(n, a);

const { address: { street, number } } = human;
console.log(street, number);