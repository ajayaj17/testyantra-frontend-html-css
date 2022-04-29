class Header extends React.Component {
  state = {
    user: "admin",
    page: "",
  };
  changeName() {
    this.state.user === "admin"
      ? this.setState({
          user: "user",
          page: "Login",
        })
      : this.setState({ user: "admin", page: "Login and Home " });
  }
  render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        <h1>{this.state.page}</h1>
        <button onClick={() => this.changeName()}>click </button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
  <div>
    <Header />
  </div>
);
