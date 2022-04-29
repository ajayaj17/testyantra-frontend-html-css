class Header extends React.Component {
  state = {
    name: "ajay",
  };
  changeName() {
    this.state.name === "ajay"
      ? this.setState({
          name: "Ajay kumar",
        })
      : this.setState({ name: "ajay" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
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
