function shopping (job1, job2) {
    const buyIceCream = job1 || job2; //If the person has a job he will eat ice cream
    const buyTV50 = job1 && job2; //If the person has two jobs will buy a 50 inch TV
    const buyTV32 = job1 != job2; //If the person has one job only he will buy a 32 inch TV
    const keepHealthy = !buyIceCream; //If the person doesn't buy ice cream he will keep healthy

    return { buyIceCream, buyTV50, buyTV32, keepHealthy};
}

console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, true));
console.log(shopping(false, false));













