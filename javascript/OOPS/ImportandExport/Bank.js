class Address{
  constructor(hno, area, city, state){
    console.log("Address Class Constructor")
    this.hno = hno;
    this.area = area;
    this.city = city;
    this.state = state
  }
  update_Address(){}
}
class Saving_Account{
  constructor(acc_id, acc_Name, amount, address){
    console.log("Savings_Account class - const")
    this.acc_id = acc_id;
    this.acc_name = acc_name;
  }
  
}
let c1 = new Savings_Account(101, "vidya", 10000, new Address(96, "marathalli", "Banglore"))
console.log(c1)

