let employees = [
  { name: "Trixie", age: 2009, salary: 40000 },
  { name: "Andree", age: 2001, salary: 60000 },
  { name: "Isacco", age: 1986, salary: 19000 },
  { name: "Tonye", age: 1998, salary: 20000 },
  { name: "Dom", age: 1999, salary: 72000 },
  { name: "Dom", age: 1999, salary: 72000 },
];
//Object 1: print employee details where salary == 72000

for (emp in employees) {
  if (employees[emp].salary <= 72000 && employees[emp].age == 1999) {
    console.log(employees[emp]);
  }
}
