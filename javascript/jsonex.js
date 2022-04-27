const obj = {
  name1: "Ajay",
  age: 17,
  hobbies: ["football", "anime"],
  address: { area: "yaksum", state: "sikkim" },
};

//converting javascript to json
const jsonObj = JSON.stringify(obj);
console.log(jsonObj);

//converting json to javascript
const jsObj = JSON.parse(jsonObj);
console.log(jsObj);
