// How to access array of objects in javascript

var people = [                 //  using dot or bracket notation
  { name: 'vidya', age: 25 },
  { name: 'mounika', age: 30 },
  { name: 'Charlie', age: 35 }
];
//console.log(people[0].name);

//console.log(people[1]['age']);

for(var i=0; i < people.length; i++){
  console.log(people[i].name + ' is ' + people[i].age + 'years old');
}
