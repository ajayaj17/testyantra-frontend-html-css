class Parent extends React.Component {
  state = {
    txt: "hello",
  };
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Child action={this.getDataFromChild.bind(this)} />
      </div>
    );
  }
  getDataFromChild(childData) {
    this.setState({
      txt: childData,
    });
  }
}

function Child(props) {
  const str = "Welcome";
  return (
    <div>
      <button onClick={() => props.action(str)}>send to Parent</button>
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("container"));
