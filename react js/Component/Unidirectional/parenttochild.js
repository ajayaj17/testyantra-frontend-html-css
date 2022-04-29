function App(props) {
  return (
    <div>
      <Home appName="Netflix" userName={props.userName} />
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <marquee>
        <h1>{props.appName}</h1>
      </marquee>
      <h2>{props.userName}</h2>
    </div>
  );
}

ReactDOM.render(<App userName="Ajay" />, document.getElementById("container"));
