// Write a program to print prime numbers.

for(let i=2; i <= 100; i++){
  let isprime = true;
  for(let j=2; j <= Math.sqrt(i); j++){
    if(i % j === 0){
      isprime = false;
      break;
    }
  }
  if(isprime){
    console.log(i);
  }
}