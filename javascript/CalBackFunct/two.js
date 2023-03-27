let sum = (a,b) => {
  return a + b
}

let multi = (a,b) => {
  return a * b
}
let calculate = (a, b, calback) => {
  return calback(a,b);
  // business logic here
}

let result = calculate(10, 20, "sum")
console.log(result)
let result2 = calculate(10, 20, multi)
console.log(result2)