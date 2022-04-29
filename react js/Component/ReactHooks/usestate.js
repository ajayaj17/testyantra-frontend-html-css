function MyApp() {
  //   let arr = [];
  //   arr.map();
  const updateChanges = () => {
    // setName("Smith");
    // setName({ ...name, lname: "rai" });
    setName(...name, (name[1] = "rai"));
  };
  //   const [name, setName] = React.useState("Allen");
  //   const [name, setName] = React.useState({ fname: "Allen", lname: "smriti" });
  const [name, setName] = React.useState(["Allen", "smriti"]);
  return (
    <div>
      {/* <h1>{name}</h1>
      <h1>{name.fname}</h1>
      <h1>{name.lname}</h1> */}
      <h1>{name}</h1>
      <button
        onClick={() => {
          updateChanges();
        }}
      >
        click
      </button>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("container"));
