class Bank {
  min_Bal = 500;
  constructor(acc_No) {
    this.acc_No = acc_No;
    console.log("Parent Class");
  }
}
class Bank_Customer extends Bank {}
let c1 = new Bank_Customer(101, "Hari", 5000);
console.log(c1);

/* let c2 = new Bank_Customer(102, "Rakshith", 50000);
console.log(c2);
 */
