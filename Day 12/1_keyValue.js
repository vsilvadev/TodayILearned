const name = "Vitor"; //Name = Key, Vitor = Value - lexical context 1

function exec() {
    const name = "Gabriel"; //lexical context 2
    return name;
}
//The constant name is not the same because each one was created in a different lexical context

//Objects are nested groups of key/value
const client = {
    name: "Vitor",//Key Name, Value Vitor
    age: 19,//Key Age, Value 19
}

console.log(name);
console.log(exec());
console.log(client);

