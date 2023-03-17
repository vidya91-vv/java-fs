// Check Whether a String Starts and Ends With Certain Characters  

let str = 'hello world';

// check if the string starts with 'Hello'
if(str.startsWith('Hello')){
  console.log(`The string '${str}' starts with 'Hello'.`);
}else{
  console.log(`The string '${str}' does not starts with 'Hello'.`);
}

// check if the string ends with 'Hello'
if(str.endsWith('Hello')){
  console.log(`The string '${str}' ends with 'Hello'.`);
}else{
  console.log(`The string '${str}' does not ends with 'Hello'.`);
}