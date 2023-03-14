// Write a program to print the  given three  numbers in descending orders? 

let num1 = 10;
let num2 = 25;
let num3 = 15;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1 + ", " + num2 + ", " + num3);
  } else {
    console.log(num1 + ", " + num3 + ", " + num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2 + ", " + num1 + ", " + num3);
  } else {
    console.log(num2 + ", " + num3 + ", " + num1);
  }
} else if (num3 >= num1 && num3 >= num2) {
  if (num1 >= num2) {
    console.log(num3 + ", " + num1 + ", " + num2);
  } else {
    console.log(num3 + ", " + num2 + ", " + num1);
  }
}
