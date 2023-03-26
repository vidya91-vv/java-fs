class Parent{
  get_Tatal_Assets(){
    console.log("10 CR");
  }
}
class Child extends Parent{
  get_Total_Assets(){
    console.log("15 CR");
  }
}
let c = new Child();
c.get_Total_Assets();