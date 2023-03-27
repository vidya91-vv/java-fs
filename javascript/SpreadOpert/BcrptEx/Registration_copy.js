const bcrypt = require('bcryptjs')

let user = {name:"Rahul", email:"rahul@gmail.com", password:"13243"}

let salt = bcrypt.genSaltSync(10);

let newPassword = bcrypt.hashSync(user.password, salt)

console.log(newPassword)

user = {...user, password:newPassword, cc:newCC}

console.log(user);
console.log(new_user)