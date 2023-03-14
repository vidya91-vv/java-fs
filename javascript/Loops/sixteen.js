// Write a program to print the Fibnonacci number series up to a given number.

let limit = parseInt(prompt("Enter the limit: "));
let num1 = 0, num2 = 1, nextTerm;

console.log("Fibonacci Series:");

while (num1 <= limit) {
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}
