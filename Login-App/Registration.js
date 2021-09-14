let user = {
  name: "Kavitha",
  email: "Kavitha@gmail.com",
  password: "123456a",
};
let new_Password =
  "$2b$10$JiyVMZg7ui/TRVSKYweyCeYJdVfuWLar2jNnIf.Sc2ihPuTjlLwb";

let new_User = { ...user, password: new_Password };
console.log(user);
console.log(new_User);
