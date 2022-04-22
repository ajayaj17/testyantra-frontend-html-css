//name function
function getName() {
  console.log(5);
}
getName();

//Anonymonus
var getName1 = function (a, b) {
  console.log(a - b);
};
getName1(5, 2);

//immediate Function
(function getName() {
  console.log("immediate");
})();

//function argument in function
function getName2(a) {
  console.log("this");
  a();
}
getName2(getName);
