const input = React.createElement(
  "div",
  null,
  React.createElement("input", { type: "text", name: "userName" }, null),
  React.createElement("input", { type: "password", name: "password" }, null),
  React.createElement("button", null, "click")
);

ReactDOM.render(input, document.getElementById("container"));
