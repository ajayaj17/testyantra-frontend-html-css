var arr = ["a", 1, true, { ename: "ajay" }];
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  console.log(i);
}

var arr2 = [10, 20, 30, 40, 50];
for (let index = 0; index < arr2.length; index++) {
  arr2[index] += 10;
}
console.log(arr2);

for (var iterator of arr2) {
  iterator += 10;
  console.log(iterator);
}
