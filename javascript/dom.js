const element = document.getElementById("demo");
element.innerHTML = "<span id='s1'>Hello javascript</span>";
const ele = document.getElementById("s1");
ele.style.backgroundColor = "red";
const pele = document.getElementsByClassName("ptag");

const para = document.createElement("p");
console.log(pele);
para.innerHTML = ele.outerHTML;
// para.innerHTML = pel;
document.body.appendChild(para);

const button = document.createElement("button");

button.innerText = "click me";
button.onclick = function () {
  alert("hello");
};
document.body.appendChild(button);
