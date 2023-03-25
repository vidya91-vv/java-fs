class Customer{
  constructor(){
    console.log("Parent Class Constructor")
  }
  get_Address(){
    console.log("Address Method")
  }
}
class Savings_Account extends Customer{
  constructor(){
    super()
    console.log("Child Class Constructor")
  }
}
new Savings_Account()