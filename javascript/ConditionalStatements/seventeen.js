//javascript program to find largest of three numbers

let num1 = 10;
let num2 = 25;
let num3 = 15;
let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

console.log("The largest number is: " + largest);
