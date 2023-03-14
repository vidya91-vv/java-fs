// Function with default parameters

function generateFullName(firstName = 'Vidya', lastName = 'Reddy') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('Vidya', 'Shree'))