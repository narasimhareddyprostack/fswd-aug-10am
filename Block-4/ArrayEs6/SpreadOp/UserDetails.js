let user = {
  name: "Kavitha",
  email: "Kavitha@gmail.com",
  password: "123456a",
};
let details = {
  email: "Kavitha@tcs.com",
  address: "96, Marathahalli",
  city: "Banagalore",
};

let user_details = { ...user, ...details };
console.log(user_details);
