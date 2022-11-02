// const nums = [2, 7, 11, 15];
// const target = 9;
const nums = [3, 2, 4];
const target = 6;

function findIndex(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        if (nums[i] + nums[j] == target) {
          console.log(i + "" + j);
          return [i, j];
        }
      }
    }
  }
}
const index = findIndex(nums, target);
console.log(index);
