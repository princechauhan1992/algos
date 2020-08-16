const mergeLists = (left, right) => {
  const mergedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }
  return [...mergedArray, ...left, ...right];
};

const mergeSort = (arr) => {
  const n = arr.length;
  if (n <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return mergeLists(sortedLeft, sortedRight);
};

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
