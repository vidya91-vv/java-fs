// Write a program to print the least number in given three  numbers? 

let num1 = 10;
let num2 = 25;
let num3 = 15;

if(num1 < num2 && num1 < num3){
  console.log(num1 + " is the least number ");
}else if(num2 < num1 && num2 < num3){
  console.log(num2 + " is the least number ");
}else{
  console.log(num3 + " is the least number ");
}