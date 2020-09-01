const schoolName = "DevSchool";

console.log(schoolName.charAt(4));//Takes the 5th element of the string (index 4)
console.log(schoolName.charCodeAt(3));//Takes the value of the character in index 3 within the Unicode table
console.log(schoolName.indexOf("e"));//Search if there is a value in the String

console.log(schoolName.substring(1));//Starts writing from the defined index
console.log(schoolName.substring(0, 3));//Prints from index 0 to index 3 without including index 3

console.log("School ".concat(schoolName).concat("!"));//Concatenating
console.log("School " + schoolName + "!");//Another way to concatenate
console.log(schoolName.replace(3, "3"));//Replaces the character "e" with the second value passed as a parameter: "3"

console.log("Ana,Maria,Pedro".split(","))//Transforms String into array defining a split (separator)
