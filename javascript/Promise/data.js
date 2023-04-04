let employees = [{id:1,first_name:"Tonnie",salary:"Dollar"},
{id:2,first_name:"Lem",salary:"Hryvnia"},
{id:3,first_name:"Frieda",salary:"Dollar"},
{id:4,first_name:"Sidney",salary:"Euro"},
{id:5,first_name:"Nessie",salary:"Rupiah"}]

let createEployee = (emp) => {
  return new Permise((resolve, reject)=>{
    let flag = true;
    setTimeout(()=>{
      employees.push(emp);
      flag ? resolve("Successfully Inserted!") : reject("Not Inserted")
    }, 3000);
  });
 }
let getEmployees = () => {
  setTimeout(()=>{
    let rows = ""
    employees.forEach((emp)=>{
      rows = rows+ `<tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.salary}</td>
                    </tr>`
    })
    document.getElementById("tbody-data").innerHTML = rows;
  }, 1000)
 }

createEmployee({id:6, name:"sonai", salary:45000})
    .then((msg)=>{
      console.log(msg)
      getEmployees()
    })
    .catch((err)=>{
      console.log(err);
    })