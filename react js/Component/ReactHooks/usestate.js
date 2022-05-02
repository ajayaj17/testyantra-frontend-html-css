function MyApp() {
  //   let arr = [];
  //   arr.map();
  const add = () => {
    // setName("Smith");
    // setName({ ...name, lname: "rai" });
    setName([...name, Math.ceil(Math.random() * 100) + " "]);
  };
  const remove = () => {
    const temp1 = [...name];
    temp1.pop();
    setName([...temp1]);
  };

  //   const [name, setName] = React.useState("Allen");
  //   const [name, setName] = React.useState({ fname: "Allen", lname: "smriti" });
  const [name, setName] = React.useState(["Allen ", "smriti "]);
  return (
    <div>
      {/* <h1>{name}</h1>
      <h1>{name.fname}</h1>
      <h1>{name.lname}</h1> */}
      <h1>{name}</h1>
      <button
        onClick={() => {
          add();
        }}
      >
        click to add
      </button>
      <button
        onClick={() => {
          remove();
        }}
      >
        click to remove
      </button>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("container"));
