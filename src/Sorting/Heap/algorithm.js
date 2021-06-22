export default async function heapSort(elements, onSwap, onSwapLast) {
  let count = elements.length;
  await buildMaxHeap(elements, count, onSwap);

  let end = count - 1;
  while (end > 0) {
    if (elements[0] > elements[end]) {
      await onSwapLast(0, end, end);
      await swap(elements, end);
    }
    end = end - 1;
    await maxHeapify(elements, 1, end, onSwap);
  }
}

/*
root of the tree: i = 1;
parent(i) = i/2;
left(i) = 2i;
right(i) = 2i+1;
*/
async function maxHeapify(elements, index, end, onSwap) {
  let left = 2 * index,
    right = 2 * index + 1,
    largest;

  if (left <= end && elements[left - 1] > elements[index - 1]) {
    largest = left - 1;
  } else {
    largest = index - 1;
  }
  if (right <= end && elements[right - 1] > elements[largest]) {
    largest = right - 1;
  }
  if (largest !== index - 1) {
    await onSwap(index - 1, largest);

    [elements[index - 1], elements[largest]] = [
      elements[largest],
      elements[index - 1],
    ];
    await maxHeapify(elements, largest + 1, end, onSwap);
  }
}

async function buildMaxHeap(elements, count, onSwap) {
  let node = Math.floor(count / 2);
  while (node) {
    await maxHeapify(elements, node, count, onSwap);
    node--;
  }
}

async function swap(elements, end) {
  [elements[end], elements[0]] = [elements[0], elements[end]];
}
