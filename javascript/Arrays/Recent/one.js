// Write a java script program to capitalize your first letter.

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);

}
let myString = "hello world";

let capitalizedString = capitalizeFirstLetter(myString);

console.log(capitalizedString);
