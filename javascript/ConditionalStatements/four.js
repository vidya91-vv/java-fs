// The switch statement is used to execute different blocks of code based on the value of an expression.

let dayOfWeek = "Monday";

switch(dayOfWeek){
  case "Monday":
  case "Tuesday":
  case "Wendnesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("weekend");
    break;
  default:
    console.log("Invalidday of week");
}