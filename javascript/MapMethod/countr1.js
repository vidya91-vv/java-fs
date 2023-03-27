const countriesMap = new Map()
console.log(countriesMap.size)  //0

countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')

for(const country of countriesMap){
  console.log(country)
}