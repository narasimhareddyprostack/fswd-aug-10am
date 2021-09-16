var sum = (a, b) => {
  return a + b;
};
let sub = () => {};

let cal = (a, b, callback) => {
  callback(a, b);
};

let result = cal(4, 5, sum);
console.log(result);
