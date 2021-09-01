class Sbi_Bank {
  min_Bal = 500;
  constructor(a, acc_Name, deposit) {
    this.account_Number = a;
    this.acc_Name = acc_Name;
    this.deposit = deposit;
  }
  open_Account() {
    console.log(this.acc_Name, "Opened Successfully");
  }
  close_Account() {}
  withdraw() {}
  deposit() {}
  mini_Statement() {}
  check_Balance() {
    console.log("Balace is :", this.deposit - this.min_Bal);
  }
}
let c1 = new Sbi_Bank(101, "Hari", 5000);
let r1 = new Sbi_Bank(102, "Rakshith", 100000);
c1.open_Account();
c1.check_Balance();
r1.open_Account();
r1.check_Balance();

/*
  Special Method, It will execute automatically only once at time of object creation.
  Note: We cont invoke constructor - explicitly
  note: Main purpose is - to initilize values 
  */

  /*
  Class is template/draft/plan/blueprint 
  class is template to constuct object 
  */