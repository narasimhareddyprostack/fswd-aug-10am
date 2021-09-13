let size = [37, 39, 41];
/*
let newSize = [];
for (value of size) {
  newSize.push(value + 1);
}
console.log(newSize);
 */
let newSize = size.forEach((value) => {
  return value + 1;
});
console.log(newSize);
