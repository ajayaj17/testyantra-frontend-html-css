const fruits = ["Apple", "orange", "mango", "banana"];

const data = (
  <ul>
    {fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>;
    })}
  </ul>
);

// ReactDOM.render(data, document.getElementById("container"));

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(data);
