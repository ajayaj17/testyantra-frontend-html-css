const div1 = (
  <div>
    <h1>Login</h1>
    <form>
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

ReactDOM.render(div1, document.getElementById("container"));
