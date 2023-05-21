const array = [1, 4, 7, 2];

const getPair = (arr, target) => {
  let current = {};
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    console.log(current[currentValue]);

    if (current[currentValue]) {
      console.log("here");
    }

    const difference = target - currentValue;
    current[difference] = i;
  }

  console.log("current", current);
};

getPair(array, 5);
