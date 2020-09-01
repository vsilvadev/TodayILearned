const name = "Rebeca";
const concatenation = "Hello " + name + "!"; //"Standard" concatenation

const template = `
    Hello
    ${name}!` //TemplateString considers line breaks
console.log(concatenation, template);

//expressions
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); //Arrow Function
console.log(`Hey... ${up("take care")}!`);//Function inside Template String