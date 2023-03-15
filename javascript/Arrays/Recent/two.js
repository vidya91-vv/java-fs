// Write a java script program to find the longest word

function findLongestWord(str) {
  let words = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

let myString = "The quick brown fox jumped over the lazy dog";

let longestWord = findLongestWord(myString);

console.log(longestWord); // Output: "jumped"
