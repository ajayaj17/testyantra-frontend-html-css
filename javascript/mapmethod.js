var arr = [10, 20, 30, 40, 50];
var mapMethod = arr.map((value, index, array) => {
  console.log(value);
  //   console.log(index);
  value += 10;
});
console.log(arr);

var arr2 = [
  { a: "a", b: "b", c: "c" },
  { d: "d", e: "e", f: "f" },
  { g: "g", h: "h", i: "i" },
];
var mapMethod = arr2.map((value, index, array) => {
  console.log(value);
});

var age = [23, 34, 54, 12, 5, 23, 13, 43];
var res = age.filter((value, index, array) => {
  return value > 18;
});
console.log(res);
var res = age.map((value, index, array) => {
  return value > 18;
});
console.log(res);
