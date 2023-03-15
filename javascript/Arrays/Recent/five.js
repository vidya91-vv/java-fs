// Write a java script program to remove duplicates from arrays

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

let myArr = [1, 2, 3, 2, 4, 3, 5];

let uniqueArr = removeDuplicates(myArr);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]


