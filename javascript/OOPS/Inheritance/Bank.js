class Account{
  open_Account(){
    console.log("Account Opened Successfully")
  }
}
class Saving_Account extends Account{}
let c1 = new Saving_Account();c1.open_Account()

class CC_Account{}