(function factorial(no) {
  let fact = 1;
  for (let i = no; i > 0; i--) {
    fact *= i;
  }
  console.log(fact);
})(5);
