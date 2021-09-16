let employees = [
  { id: 1, name: "Ravi", email: "Ravi@Gamil.com" },
  { id: 2, name: "Prakash", email: "Prakash@Gamil.com" },
];

let createEmployee = (employee, callback) => {
  console.log("First");
  setInterval(() => {
    employees.push(employee);
    callback();
  }, 2000);
};

createEmployee({ id: 3, name: "Mahesh", email: "Mahesh@Gamil.com" }, () => {
  console.log("Second");
  setInterval(() => {
    let rowData = "";
    employees.map((emp) => {
      rowData =
        rowData +
        `<tr><td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td></tr>`;
    });
    document.getElementById("data").innerHTML = rowData;
  }, 1000);
});
