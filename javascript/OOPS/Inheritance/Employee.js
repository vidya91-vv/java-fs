class Employee{
   eid;
   ename
   constructor(id, name){
    this.eid = id;
    this.ename = name
   }
   get_Details(){
    console.log("Employee Name:", this.ename)
   }
}
let e1 = new Employee(101, "Rahul")
let e2 = new Employee(102, 'sonia')
//console.log(e1)
e1.get_Details()
e2.get_Details()