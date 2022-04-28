function Header(props) {
  return <h1>header in functional component {props.userName}</h1>;
}
ReactDOM.render(
  <Header userName="Ajay" />,
  document.getElementById("container")
);
