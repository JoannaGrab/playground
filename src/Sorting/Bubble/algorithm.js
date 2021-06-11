export default async function bubbleSort(elements, onSwap) {
  // console.log(`before bubble sort: ${elements}`);

  let numberOfElements = elements.length;

  for (let i = 0; i < numberOfElements; i++) {
    for (let j = 0; j < numberOfElements - 1; j++) {
      if (elements[j] > elements[j + 1]) {
        let tmp = elements[j];
        elements[j] = elements[j + 1];
        elements[j + 1] = tmp;
        // console.log(elements);
        if (onSwap) {
          await onSwap(j, j + 1);
        }
      }
    }
  }
  // console.log(`after bubble sort: ${elements}`);
}
