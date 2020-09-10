function onlyGoodNews(grade) {
    if (grade >= 7) {
        //If true - execute this block of code
        console.log("Approved with grade: " + grade);
    } 
}

onlyGoodNews(8.1);
onlyGoodNews(5.2);

function ifIsTrueITellYou(value) {
    if (value) {
        console.log("It's true... " + value);
    }
}

ifIsTrueITellYou();
ifIsTrueITellYou(null);
ifIsTrueITellYou(" ");
ifIsTrueITellYou(1);