export default async function quickSort(
  elements,
  start,
  end,
  setupPivot,
  setupLeft,
  setupRight,
  animateSwap,
  setupColors
) {
  if (start < end) {
    let pivot = await partitionHoare(
      elements,
      start,
      end,
      setupPivot,
      setupLeft,
      setupRight,
      animateSwap,
      setupColors
    );
    await quickSort(
      elements,
      start,
      pivot,
      setupPivot,
      setupLeft,
      setupRight,
      animateSwap,
      setupColors
    );
    await quickSort(
      elements,
      pivot + 1,
      end,
      setupPivot,
      setupLeft,
      setupRight,
      animateSwap,
      setupColors
    );
  }
  await setupColors(elements);
}

async function partitionHoare(
  elements,
  start,
  end,
  setupPivot,
  setupLeft,
  setupRight,
  animateSwap,
  setupColors
) {
  let pivot = elements[Math.floor((start + end) / 2)],
    i = start - 1,
    j = end + 1;

  await setupPivot(Math.floor((start + end) / 2));

  while (true) {
    do {
      i++;
    } while (elements[i] < pivot);

    do {
      j--;
    } while (elements[j] > pivot);

    if (i >= j) return j;
    else {
      await setupLeft(i);
      await setupRight(j);
      await animateSwap(i, j);
      await setupColors(elements);
      await swap(elements, i, j);
    }
  }
}

async function swap(elements, a, b) {
  let tmp = elements[a];
  elements[a] = elements[b];
  elements[b] = tmp;
}
