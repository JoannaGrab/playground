export default async function insertionSort(elements, onExit, onSwap, onEntry) {
  // console.log(`before insertion sort: ${elements}`);

  let numberOfElements = elements.length;

  for (let i = 1; i < numberOfElements; i++) {
    let j = i - 1;
    const current = elements[i];

    if (onExit) {
      await onExit(i);
    }

    while (j >= 0 && elements[j] > current) {
      elements[j + 1] = elements[j];
      if (onSwap) {
        await onSwap(j, j + 1);
      }
      j--;
    }
    elements[j + 1] = current;

    if (onEntry) {
      await onEntry(j + 1);
    }
  }
  // console.log(elements)
}
