// MinHeap
// Visualize a BT where elements are added levelwise
// Adhere to the property that the values at the top are minimum and larger at the bottom
// adjacent values don't matter, just parent and child relation matters

// values are removed from top and added at the bottom

// But the heap values are stored in array itseld which makes it effecient

// Parent index = (index - 2) / 2
// Left child index = 2*index + 1
// Right child index = 2*index + 2

// Last non leaf node = arr.length / 2 - 1

function heapify(heap, i, n) {
  let min = i;
  let leftIndex = 2 * i + 1;
  let rightIndex = 2 * i + 2;

  // compare with children and find the smallest index
  if (leftIndex < n && heap[leftIndex] < heap[min]) {
    min = leftIndex;
  }
  if (rightIndex < n && heap[rightIndex] < heap[min]) {
    min = rightIndex;
  }

  if (min != i) {
    // if child is smaller, swap the elements
    [heap[min], heap[i]] = [heap[i], heap[min]];

    heapify(heap, min, n);
  }
}

// build heap from array
function buildMinHeap(arr) {
  let n = arr.length;

  // Start heapifying from last non-leaf node
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, i, n);
  }
}

let myHeap = [100, 17, 36, 25, 19, 7, 3, 2, 1];
buildMinHeap(myHeap);
// ideally: [1, 2, 3, 17, 19, 7, 36, 100, 25]
console.log('myHeap:', myHeap); // [1, 2, 3, 17, 19, 7, 36, 100, 25]
