function treatError(error) {
    throw new Error ("Could not execute");
}

function printUpperName(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!"); 
    }catch(err){
        treatError(err);
    } finally {
        console.log("Ending program...");
    }
}

const obj = { namee: "Vitor" }//"namee" doesn't exists
printUpperName(obj);

