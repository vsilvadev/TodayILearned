{
    {
        {
            {
                {
                    var test = "Var"; //Putting the "test" variable into blocks of code
                }
            }
        }
    }
}

console.log(test); //Printing "test" that is inside the code blocks

function testing(){
    var local = 123;
} 

console.log(local); //Not visible, variables created within functions only exist within the scope of the function

//Variavel tem dois escopos: Ou é global ou o escopo da função