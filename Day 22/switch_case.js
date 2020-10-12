const printResult = function(grade) {
    switch (Math.floor(grade)) {
        case 10:
        case 9:
            console.log("Honor Board");
            break;
        case 8: 
        case 7:
            console.log("Approved");
            break;
        case 6:
        case 5:
        case 4:
            console.log("Recovery");
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Disapproved");
            break;
        default:
            console.log("Invalid");
    }
}

printResult(10);
printResult(7);
printResult(5);
printResult(2);