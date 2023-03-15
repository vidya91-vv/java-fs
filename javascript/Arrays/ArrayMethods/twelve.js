// 
let myArray = [10, 20, 30, 40, 50];

let result = myArray.find(function(element){  // use findIndex
   return element > 25;
});

console.log(result);