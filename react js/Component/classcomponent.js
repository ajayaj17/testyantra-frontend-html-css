class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> Header Class Component</h1>
        <h2> Hello OneBill</h2>
        <h3> Good Afternoon "{this.props.name}"</h3>
      </div>
    );
  }
}

ReactDOM.render(<Header name="Aj" />, document.getElementById("container"));
