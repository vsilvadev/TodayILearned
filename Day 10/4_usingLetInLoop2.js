const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

//Print the respective value in each position of the array - Let has a block scope, so to each repetition the "i" value is different according to the for
funcs[2](); //print 2
funcs[8](); //print 8