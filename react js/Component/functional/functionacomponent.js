function Header(props) {
  return <h1>header in functional component {props.userName}</h1>;
}

function Content({ sub1, sub2, sub3 }) {
  return (
    <h1>
      {sub1}
      {sub2}
      {sub3}
    </h1>
  );
}

function Footer({ person }) {
  return (
    <h1>
      {person.fname}
      {person.lname}
    </h1>
  );
}

ReactDOM.render(
  <div>
    <Header userName="Ajay" />
    <Content sub1="java " sub2="react " sub3="javascript " />
    <Footer person={{ fname: "Ajay ", lname: "Gupta" }} />
  </div>,
  document.getElementById("container")
);
