class Fruit{
  eat(){
    console.log("I am eating fruite")
  }
}
class Apple extends Fruit{
  eat(){
    console.log("I am eating Apple")
  }
}
class Mango extends Fruit{
  eat(){
    console.log("I am eating Mango")
  }
}
let myobj = new Fruit();
myobj.eat();
 myobj = new Apple();
myobj.eat();
 myobj = new Mango();
myobj.eat();