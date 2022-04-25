var arr = [10, 20, 30, 40, 50, 60];
for (let i in arr) {
  console.log(i);
}
for (let i of arr) {
  console.log(arr);
}
let object = { 1: "10", 2: "20", 3: "30", 4: "40", 5: "50" };
for (const key in object) {
  console.log(key);
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    console.log(element);
  }
}
for (let i of object) {
  console.log(i);
}
