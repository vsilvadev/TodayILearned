function test1(num) {
    if (num > 7)
        console.log(num);//Only execute this line before check the If conditional
        console.log("END"); //This line will always execute because she's out of the if scope
}

test1(6);
test1(8);