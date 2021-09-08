const Address = require("./Address");

class Bank {
  constructor(a, b) {
    this.acc_No = a;
    this.address = b;
  }
}

let c1 = new Bank(101, new Address(96, "RJHalli", "BNG", "KA"));
console.log(c1.address.city);
