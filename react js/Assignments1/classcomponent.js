class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label for="userName">Username</label>
          <input type="text" name="userName" value={this.userName}></input>
          <br></br>
          <label for="password">Password</label>
          <input type="password" name="password" value={this.password}></input>
          <br></br>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(
  <Form userName="ajay" password="1234567" />,
  document.getElementById("container")
);
