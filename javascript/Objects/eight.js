let person = {
  firstName : 'Vidya',
  lastName : 'Reddy',
  fullName : function(){
    return this.firstName + this.lastName;
  },
  changeName : function(newFirstName, newLastName){
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
};
console.log(person.fullName());

person.changeName('Vinod', 'Reddy');
console.log(person.fullName());
