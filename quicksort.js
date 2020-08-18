const quicksort = (arr) => {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }
  const pivot = arr[length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
};

console.log(quicksort([10, 6, 3, 8, 2, 6, 4, 7, 9, 1]));
