class Saving_Account{
   min_Bal = 500;
   open_Account(){
    console.log("Account Opend Successfully");
    }
   deposit(){ }
   withdraw(){ }
   getStatement(){ }
   getBal(){ }
   close_Account(){ }

   }
   let c1 = new Saving_Account();
   let c2 = new Saving_Account();
   console.log(c1.min_Bal);
   console.log(c2.min_Bal);
   c1.open_Account();
   c2.open_Account();
