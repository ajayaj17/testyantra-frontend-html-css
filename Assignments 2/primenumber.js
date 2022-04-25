//1st
function checkPrime1(no) {
  let flag = 0;
  for (let i = 2; i < Math.ceil(no / 2); i++) {
    if (no % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag === 1) {
    console.log("not a prime");
  } else {
    console.log("prime");
  }
}
checkPrime1(47);
//2nd
var checkPrime2 = function (no) {
  let flag;
  for (let index = 2; index < Math.ceil(no / 2); index++) {
    if (no % index == 0) {
      flag = 1;
      break;
    }
  }
  flag == 1 ? console.log("not a prime") : console.log("prime");
};
checkPrime2(50);
//3rd
(function checkPrime3(no) {
  let flag = 0;
  for (let i = 2; i < Math.ceil(no / 2); i++) {
    if (no % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag === 1) {
    console.log("not a prime");
  } else {
    console.log("prime");
  }
})(5);
//4th
var checkPrime4 = (no) => {
  let flag = 0;
  for (let i = 2; i < Math.ceil(no / 2); i++) {
    if (no % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag === 1) {
    console.log("not a prime");
  } else {
    console.log("prime");
  }
};
checkPrime4(78);
