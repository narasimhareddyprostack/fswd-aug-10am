let employee = {
  name: "Ravi",
  age: 24,
  getDetails: function () {
    return this.name + this.age;
  },
  fullDetails: () => {
    return "Hello";
  },
};
console.log(employee.name);
console.log(employee.loc);
console.log(employee.getDetails());
console.log(employee.fullDetails());
