class Valid extends React.Component {
  state = {
    userName: this.props.userName,
  };
  render() {
    if (this.state.userName === "admin") {
      return <h1>{this.state.userName}</h1>;
    } else {
      return <h1>{this.state.userName}</h1>;
    }
  }
}

function login() {
  const userName = document.getElementById("t1").value;
  const password = document.getElementById("t2").value;
  console.log(userName);
  console.log(password);
  ReactDOM.render(
    <Valid userName={userName} />,
    document.getElementById("root")
  );
}
