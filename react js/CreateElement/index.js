// const e1 = React.createElement("h1", null, "first react element");
// ReactDOM.render(e1, document.getElementById("container"));

// const ul1 = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "car"),
//   React.createElement("li", null, "bike")
// );
// ReactDOM.render(ul1, document.getElementById("container"));

const moblies = ["iphone", "samsung", "redmi", "nokia", "oneplus"];
const ul2 = React.createElement(
  "ul",
  null,
  moblies.map((moblie, index) => {
    return React.createElement("li", { key: index }, moblie);
  })
);

ReactDOM.render(ul2, document.getElementById("container"));
