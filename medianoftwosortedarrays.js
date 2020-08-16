const medianOfArray = (arr) => {
  const leftIndex = Math.floor((arr.length - 1) / 2);
  const rightIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return arr[leftIndex];
  }
  return (arr[leftIndex] + arr[rightIndex]) / 2;
};

const median = (arr1, arr2) => {
  const smallerArray = arr1;
  const largerArray = arr2;
  if (smallerArray.length > largerArray.length) {
    smallerArray = arr2;
    largerArray = arr1;
  }
  const smallerLength = smallerArray.length;
  const largerLength = largerArray.length;
  let low = 0;
  let high = smallerLength;
  while (low <= high) {
    const partitionS = Math.floor((low + high) / 2);
    const partitionL = Math.floor((smallerLength + largerLength + 1) / 2) - partitionS;
    const maxLeftS = partitionS ? smallerArray[partitionS - 1] : Number.MIN_VALUE;
    const minRightS = partitionS === smallerLength ? Number.MAX_VALUE : smallerArray[partitionS];
    const maxLeftL = partitionL ? largerArray[partitionL - 1] : Number.MIN_VALUE;
    const minRightL = partitionL === largerLength ? Number.MAX_VALUE : largerArray[partitionL];
    if (maxLeftS <= minRightL && minRightS >= maxLeftL) {
      return medianOfArray([Math.max(maxLeftS, maxLeftL), Math.min(minRightS, minRightL)]);
    } else if (maxLeftS > minRightL) {
      high = partitionS - 1;
    } else {
      low = partitionS + 1;
    }
  }
};

console.log(median([2], [12, 14, 16, 18, 20]));
