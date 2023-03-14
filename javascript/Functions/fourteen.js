//Arrow Function

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function


/*function square(n) {
  return n * n
}

console.log(square(2)) // 4  */


const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
//const square = n => n * n  // -> 4