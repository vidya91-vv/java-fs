let employees = [
  {id:101, name:"Rahul", salary:45000},
  {id:101, name:"Sonia", salary:55000}
]

let createEmployee = (emp, callback) => {
  //execute will 3 sec
  //setTimeout(() => { }, 3000)
  console.log("first")
  setTimeout(() => {
    employees.push(emp)
    callback()
  }, 3000)
}

let getEmployee = () => {
  //execute will 1 sec
  setTimeout(() => { 
    console.log("second")
    let rows = ""
    employees.forEach((employee) => {
      rows += `<tr>
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.salary}</td>
      </tr>`
      
    })
    document.getElementById('data').innerHTML = rows
  }, 1000)
}

createEmployee({id:103, name:"priyanka", salary:65000}, getEmployee);
//getEmployee()