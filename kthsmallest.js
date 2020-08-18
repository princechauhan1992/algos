class MaxHeap {
  constructor(arr, k) {
    this.heapArray = arr;
    this.size = k;
    let i = Math.floor((k - 1) / 2);
    while (i >= 0) {
      this.heapify(i);
      i--;
    }
  }

  swap(x, y) {
    const temp = this.heapArray[x];
    this.heapArray[x] = this.heapArray[y];
    this.heapArray[y] = temp;
  }

  heapify(index) {
    let parentIndex = index;
    let largestIndex = index;
    let leftChildIndex = 2 * parentIndex + 1;
    let rightChildIndex = 2 * (parentIndex + 1);

    if (leftChildIndex < this.size && this.heapArray[leftChildIndex] > this.heapArray[parentIndex]) {
      largestIndex = leftChildIndex;
    }
    if (rightChildIndex < this.size && this.heapArray[rightChildIndex] > this.heapArray[largestIndex]) {
      largestIndex = rightChildIndex;
    }
    if (largestIndex !== parentIndex) {
      this.swap(parentIndex, largestIndex);
      this.heapify(largestIndex);
    }
  }
  extractMax() {
    if (size === 0) {
      throw new Error('Empty heap');
    }
    const max = heapArray[0];
    if (this.size > 1) {
      this.heapArray[0] = this.heapArray[size - 1];
      this.heapify(0);
    }
    this.size--;
    return max;
  }
  getMax() {
    if (this.size === 0) {
      throw new Error('Empty heap');
    }
    return this.heapArray[0];
  }

  replaceMax(elem) {
    this.heapArray[0] = elem;
    this.heapify(0);
  }
}

const kthsmallest = (arr, k) => {
  const n = arr.length;
  const heap = new MaxHeap(arr, k);
  for (let i = k; i < n; i++) {
    if (arr[i] < heap.getMax()) {
      heap.replaceMax(arr[i]);
    }
  }
  return heap.getMax();
};

console.log(kthsmallest([12, 3, 5, 7, 19, 3, 2], 6));
