//rest operator

function addNumber(...nums) {
  let sum = 0;
  console.log(typeof nums);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(`sum - ${sum}`);
}
addNumber(10, 20, 30);
addNumber(10, 20);
addNumber(10, 20, 30, 40);
