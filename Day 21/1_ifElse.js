const printResult = function(grade) {
    if (grade  >= 7) {
        console.log("Approved");
    } else { 
        console.log("Disapproved")
    } //If the condition is not met, run "else"
}

printResult(10);
printResult(3);