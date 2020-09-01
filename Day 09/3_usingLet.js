var number = 1;
var number2 = 1;

{
    let number = 2;
    console.log("inside1: " + number);
    console.log("inside2: " + number2);
}

console.log("outside1: " + number);
console.log("outside2: " + number2);

//em let ele assume o valor da variavel dentro do escopo (number 1), se não houver a variavel dentro do escopo ele busca do escopo externo number (2), mudando dentro de um escopo não afeta o externo