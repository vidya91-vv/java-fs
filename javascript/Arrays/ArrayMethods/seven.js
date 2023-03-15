// reverse() to reverse the order of elements in an array

/*
let num = [1, 2, 3, 4, 5];
num.reverse()
console.log(num) 
*/

function reverse_order(arr){
  console.log('**** Elements in Reverse Order ****');
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}
reverse_order([10, 20, 30, 40, 50])
