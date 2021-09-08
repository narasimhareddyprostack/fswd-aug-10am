const Address = require("./Address");
class CreditCard {
  constructor(cc_No, address) {
    this.cc_No = cc_No;
    this.address = address;
  }
}
let cc = new CreditCard(4444, new Address(99, "Marathahalli", "Noida", "UP"));
console.log(cc.address.state);
