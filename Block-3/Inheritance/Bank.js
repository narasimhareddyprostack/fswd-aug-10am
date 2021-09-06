class Sbi_Bank {
  min_Bal = 500;

  get_Min_Balance() {
    return this.min_Bal + 10;
  }
}

class CreditCard extends Sbi_Bank {
  min_Bal = 600;
  /* get_Min_Balance() {
    return this.min_Bal + 20;
  } */
}

let vc1 = new CreditCard();

console.log(vc1.min_Bal);
console.log(vc1.get_Min_Balance());
/*
class Bank_Customer extends Sbi_Bank {}
let c1 = new Bank_Customer();
console.log(c1.min_Bal);
console.log(c1.get_Min_Balance());

//console.log(new Bank_Customer().min_Bal);
*/
