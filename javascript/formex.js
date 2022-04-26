// function try1() {
//   const text1 = document.myform.name.value;
//   const text2 = document.getElementById("t2").value;
//   const text3 = document.getElementById("t3").value;

//   console.log(text1);
//   console.log(text2);
//   console.log(text3);
// }
const btn = document.getElementById("bt1");
btn.onclick = function () {
  const text1 = document.myform.name.value;
  const text2 = document.getElementById("t2").value;
  const text3 = document.getElementById("t3").value;

  console.log(text1);
  console.log(text2);
  console.log(text3);
};
