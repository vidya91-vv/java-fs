// Write a program to check a given number is Armstrong number or not.

let number = parseInt(prompt("Enter a number: "));
let sum = 0;
let temp = number;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = parseInt(temp / 10);
}

if (number === sum) {
    console.log(number + " is an Armstrong number");
} else {
    console.log(number + " is not an Armstrong number");
}
