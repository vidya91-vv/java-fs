function Employee(name, age, basicsal){
  this.name = name;
  this.age = age;
  this.basicsal = basicsal;
  this.bonus = 30000;
  this.calfinalsal = function(){
    finalsal = this.basicsal+this.bonusconsole.log("Final Salary:"+ finalsal);
  }
  this.displayinfo=function(){
    console.log("Name:" + this.name + " " + "Age:" + this.age)
  }
}
emp1 = new Employee("Jack", 25, 5000)
emp1.displayinfo();
emp1.calfiinalsal();
console.log(emp1.bonus);
emp1.bonus = 40000;
console.log(emp1.bonus);