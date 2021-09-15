let a = [1, 2, 3];
let b = [4, 5, 6];
console.log([...a, ...b])
console.log(new Array(...a, ...b));
console.log(Array.of(...a,...b))