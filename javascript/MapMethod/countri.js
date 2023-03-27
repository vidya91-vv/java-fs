// Adding values to the Map

const countriesMap = new Map()
console.log(countriesMap.size)  //0

countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')

console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Finland'))      // Getting a value from Map

console.log(countriesMap.has('Finland'))       // Checking key in Map