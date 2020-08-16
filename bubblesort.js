/**
 * Time complexity O(n^2)
 */

const swap = (arr, x, y) => {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const bubbleSort = (arr) => {
  const sortedArray = JSON.parse(JSON.stringify(arr));
  const n = sortedArray.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1);
      }
    }
  }
  return sortedArray;
};

console.log(bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
