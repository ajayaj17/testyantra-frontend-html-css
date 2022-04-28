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

class Content extends React.Component {
  render() {
    return (
      <h1>
        Content Component {this.props.fName}
        {this.props.lname}
      </h1>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <p>Footer</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
  <div>
    <Header name="Aj" />
    <Content fName="Ajay" lname=" Kumar" />
    <Footer />
  </div>
);
