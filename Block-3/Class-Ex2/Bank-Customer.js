class Bank_Customer {
  min_Balance = 500;
  //acc_No;
  acc_Name;
  constructor(a, b, c) {
    this.acc_No = a;
    this.acc_Name = b;
    this.min_Balance = 600;
  }
  check_Balance() {
    console.log("Balance:", this.min_Balance);
  }
}
let c1 = new Bank_Customer(101, "Hari");
console.log(c1);
c1.check_Balance();
let c2 = new Bank_Customer(102, "Prasanth");
console.log(c2);
c2.check_Balance();
//How to initilize Object values?
/*

constructor?

*/
