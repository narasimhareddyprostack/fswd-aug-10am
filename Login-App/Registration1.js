const bcrypt = require("bcrypt");

let user = {
  name: "Kavitha",
  email: "Kavitha@gmail.com",
  password: "123456a",
};

const salt = bcrypt.genSaltSync(10);
const newPassword = bcrypt.hashSync(user.password, salt);
console.log(newPassword);

let new_User = { ...user, password: newPassword };
console.log(user);
console.log(new_User);
