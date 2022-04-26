//primitive type are always call by value
let num = 344;
numCopy = num + 10; //copying num
console.log(num, numCopy);

console.log("------------------------------");
//Refrence  type are always call by refrence
let arr = [11, 34, 54, 65, 64];
let arrCopy = arr;
arrCopy.push(23);
console.log("arr", arr);
console.log("arrCopy", arrCopy);

console.log("------------------------------");
//Refrence type to value
//deep copy for non nested
let arr1 = [11, 34, 54, 65, 64];
let arrCopy1 = [...arr1]; //copying by call by value ([...arr1] is spread operator)
arrCopy1.push(23);
arr1.push(45);
console.log("arr", arr1);
console.log("arrCopy", arrCopy1);

console.log("------------------------------");
//shallow copy of object with nested`
const movie = {
  movieName: "spiderman",
  director: "jhon watt",
  actor: "tom hollad",
  moredetails: { actress: "zendaya", villan: "goblin" },
};

let movieCopy = { ...movie };
movie.numberofdays = 100;
movieCopy.moredetails.actress = "zenny"; //shallow copy will affect nested object or array
movieCopy.moviesize = 1.3;
console.log(movie, "movies");
console.log(movieCopy, "movieCopy");

console.log("------------------------------");
//deep copy of nested
const movie1 = {
  movieName: "spiderman",
  director: "jhon watt",
  actor: "tom hollad",
  moredetails: { actress: "zendaya", villan: "goblin" },
};

let movieCopy1 = { ...movie1, moredetails: { ...movie1.moredetails } };
movie1.numberofdays = 100;
movieCopy1.moredetails.actress = "zenny"; //deep copy will not affect nested object or array
movieCopy1.moviesize = 1.3;
console.log(movie1, "movies");
console.log(movieCopy1, "movieCopy");
