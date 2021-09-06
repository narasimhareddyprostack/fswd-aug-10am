class Central {
  tax = 10;
  discount = 0;
  get_Tax() {
    return this.tax;
  }
}

class Union extends Central {
  discount = 1;
  get_Tax() {
    return this.tax + 2;
  }
}
let u1 = new Union();
console.log(u1.tax);
console.log(u1.get_Tax());
console.log(u1.discount);

class State extends Central {
  tax = 20;
  get_Tax() {
    return this.tax + 8;
  }
}

let s1 = new State();
console.log(s1.tax);
console.log(s1.get_Tax());
console.log(s1.discount);
