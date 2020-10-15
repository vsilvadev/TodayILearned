const grades = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in grades) {
    console.log(`${i} = ${grades[i]}`);
}

const human = {
    name: "Vitor",
    age: 19,
    city: "São Paulo"
}

for (let values in human) {
    console.log(`${values} = ${human[values]}`);
}