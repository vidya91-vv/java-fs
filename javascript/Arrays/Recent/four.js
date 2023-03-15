// Write a javascript program to find the second largest number

function findSecondLargest(numbers) {
  let largest = numbers[0];
  let secondLargest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
      secondLargest = numbers[i];
    }
  }
  return secondLargest;
}

let myNumbers = [5, 7, 3, 9, 12, 4];

let secondLargest = findSecondLargest(myNumbers);

console.log(secondLargest); // Output: 9
