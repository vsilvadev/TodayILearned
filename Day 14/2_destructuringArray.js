const [a] = [10]; //Recieve the value of the firts element in the array (10); 
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; //I can get only the elements in the index that I want
console.log(n1, n3, n5, n6);//If I try to get a position that doesn't have a value, recieve undefined