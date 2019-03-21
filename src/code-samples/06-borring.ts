// prettier-ignore
const range = num => Array(num).fill(null).map((v, i) => i);
const split = arr => {
  if (arr.length === 2) {
    return arr;
  }
  return [split(arr.slice(0, arr.length / 2)), split(arr.slice(-arr.length / 2))];
};
const result = range(Math.pow(2, 4));
const splitted = split(result);
console.log(JSON.stringify(splitted));

// [[[[0,1],[2,3]],[[4,5],[6,7]]],[[[8,9],[10,11]],[[12,13],[14,15]]]]
