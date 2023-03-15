// Write a java script program to remove duplicate names

function removeDuplicates(names) {
  let uniqueNames = [];
  for (let i = 0; i < names.length; i++) {
    if (uniqueNames.indexOf(names[i]) === -1) {
      uniqueNames.push(names[i]);
    }
  }
  return uniqueNames;
}

let myNames = ["John", "Mary", "John", "Bob", "Mary", "Jane"];

let uniqueNames = removeDuplicates(myNames);

console.log(uniqueNames); // Output: ["John", "Mary", "Bob", "Jane"]
