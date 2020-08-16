const swap = (arr, x, y) => {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const insertionSort = (arr) => {
  const sortedArray = JSON.parse(JSON.stringify(arr));
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    while (j > 0) {
      if (sortedArray[j - 1] < sortedArray[j]) {
        break;
      }
      swap(sortedArray, j, j - 1);
      j--;
    }
  }
  return sortedArray;
};

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
