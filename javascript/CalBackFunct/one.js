let sum = (a,b) => {
  return a + b
}

let multi = (a,b) => {
  return a * b
}
let calculate = (a, b, x) => {
  return x(a,b);
  // business logic here
}

let result = calculate(10, 20, "sum")
console.log(result)