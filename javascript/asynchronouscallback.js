function first(callback) {
  console.log("first");
  callback();
}
setTimeout(first, 5000);

function second() {
  console.log("second");
}
setTimeout(second, 2000);

first(second);
