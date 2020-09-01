const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

//Print in every position the value who made "i" come outside the loop because once you change one value of Var you change all values to the same
funcs[2](); //print 10
funcs[8](); //print 10