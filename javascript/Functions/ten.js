//Function with many parameters

// this function takes array as a parameter and sum up the numbers in the array

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
 const numbers = [1, 2, 3, 4, 5];
    //calling a function
    console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
     console.log(areaOfCircle(10))