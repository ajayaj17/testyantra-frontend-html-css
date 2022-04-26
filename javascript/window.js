console.log(window);
console.log(window.document);
console.log(window.history);

navigator.geolocation.getCurrentPosition((loc) => {
  console.log("location", loc);
});
