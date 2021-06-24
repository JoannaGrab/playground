export default async function shellSort(
  elements,
  displayGap,
  animateSwap,
  showCurrent,
  resetCurrent
) {
  let n = elements.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    await displayGap(gap);

    for (let i = gap; i < n; i++) {
      const current = elements[i];
      var j = i;

      await showCurrent(j - gap, j);

      for (j; j >= gap && elements[j - gap] > current; j -= gap) {
        await showCurrent(j - gap, j);
        await animateSwap(j, j - gap);
        await resetCurrent(j, j - gap);
        elements[j] = elements[j - gap];
      }

      if (j - gap >= 0) {
        await resetCurrent(j, j - gap);
      }

      elements[j] = current;
    }
  }
}
