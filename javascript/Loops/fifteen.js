// Write a program to read 5 numbers and print only the even numbers.

let i = 1;
while(i <= 5){
  let num = parseInt(prompt("Enter a number is: "));

  if(num % 2 === 0){
    console.log(num);
  }
  i++;
}