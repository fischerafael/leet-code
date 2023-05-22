const array = [1, 4, 7, 2];

function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const complementValue = target - currentValue;
    const complementValueIndex = numObj[complementValue];
    const hasComplementValueInTheMap = complementValueIndex !== undefined;

    if (hasComplementValueInTheMap) {
      return [complementValueIndex, i];
    }

    numObj[currentValue] = i;
  }
}

console.log(twoSum(array, 3));
