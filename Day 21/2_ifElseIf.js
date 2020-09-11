Number.prototype.between = function (start, end) {
    return this >= start && this <= end;
}

const printResult = function (grade) {
    if(grade.between(9,10)) {
        console.log("Honor board")
    } else if (grade.between(7,8.99)) {
        console.log("Approved");
    } else {
        console.log("Disapproved");
    }
}

printResult(10);
printResult(8);
printResult(3);