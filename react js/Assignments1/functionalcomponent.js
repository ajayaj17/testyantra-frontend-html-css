function Note(props) {
  return <textarea id="t1">{props.val}</textarea>;
}

ReactDOM.render(<Note val="type here" />, document.getElementById("container"));
