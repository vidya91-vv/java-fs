class Account{
  constructor(id, name){
    console.log("Parent Class const is Saving_Account Const")
    this.id = id;
    this.ename = name
  }
}

class Saving_Account extends Account{
  min_Bal = 500;
  constructor(id, name, amount){
    super();
    console.log("Child Class is Saving_Account const")
    this.amount = amount;
  }
  get_Bal(){
    return this.amount - this.min_Bal;
  }
}

class Current_Account extends Account{
  min_Bal = 25000;
  constructor(id, name, amount){
    super(id, name);
    this. amount = amount
  }
  get_Bal(){
    return this.amount - this. min_Bal;
  }
}
let c1 = new Saving_Account(101, "vidya", 50000);
//console.log(c1)
console.log(c1.get_Bal());


let c2 = new Current_Account(101, "reddy", 60000);
//console.log(c2)
console.log(c2.get_Bal());