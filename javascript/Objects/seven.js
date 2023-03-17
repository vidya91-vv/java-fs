let myobj = {
  prop1 : 3,
  prop2 : 4,
  sum : function(){
    return this.prop1 + this.prop2;
  }
};
console.log(myobj.sum());