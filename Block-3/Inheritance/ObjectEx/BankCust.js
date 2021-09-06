class Address {
  constructor(house_No, street, city, state) {
    this.house_No = house_No;
    this.street = street;
    this.city = city;
    this.state = state;
    this.pincode = 5600043;
  }
}
class Bank_Cust {
  constructor(a, b, c) {
    this.acc_No = a;
    this.acc_Name = b;
    this.address = c;
  }
}

let c1 = new Bank_Cust(
  101,
  "vinay",
  new Address(96, "RJ Halli", "Bangalore", "KA")
);
console.log(c1);
console.log(c1.address.street);
