function display() {
  const name1 = document.getElementById("t1").value;
  const password1 = document.getElementById("t2").value;
  localStorage.setItem("username", name1);
  localStorage.setItem("password", password1);
  const tb = document.getElementById("tb");
  tb.innerHTML =
    "<tr><td>" +
    localStorage.getItem("username") +
    "</td>" +
    "<td>" +
    localStorage.getItem("password") +
    "</td></tr>";

  localStorage.clear();
}
