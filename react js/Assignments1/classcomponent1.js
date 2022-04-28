class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Registration</h1>
        <form>
          <label for="email">Email</label>
          <input type="email" name="email"></input>
          <br></br>
          <label for="fname">First Name</label>
          <input type="text" name="fname"></input>
          <br></br>
          <label for="lname">Last Name</label>
          <input type="text" name="lname"></input>
          <br></br>
          <label for="userName">Username</label>
          <input type="text" name="userName"></input>
          <br></br>
          <label for="password">Password</label>
          <input type="password" name="password"></input>
          <br></br>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Form />, document.getElementById("container"));
