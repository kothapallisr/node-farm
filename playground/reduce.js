const arr = [1, 2, 3, 4, 5];

const reducer = function (acc, cur) {
  return acc + cur;
};

console.log(arr.reduce(reducer, 0));
