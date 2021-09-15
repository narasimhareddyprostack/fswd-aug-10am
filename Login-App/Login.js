const bcrypt = require("bcrypt");

let user = {
  name: "Kavitha",
  email: "Kavitha@gmail.com",
  password: "123456a",
};
console.log(user);
const salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password, salt);

user = { ...user, password: newPassword };
console.log(user);
let result = bcrypt.compareSync("123456a", user.password);

if (result) {
  console.log("User Login Successfull");
} else {
  console.log("Login failure");
}
