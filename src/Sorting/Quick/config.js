import createAnimator from "./animator";
import quickSort from "./algorithm";

export const quicksort = {
  id: "quick_sort",
  algorithm: "Quick Sort",
  description:
    "Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
  chart: {
    labels: [
      "10",
      "100",
      "1 000",
      "5 000",
      "10 000",
      "15 000",
      "20 000",
      "25 000",
      "50 000",
    ],
    label: "Quick sort analysis",
    backgroundColor: "rgba(55, 90, 6, 2)",
    borderColor: "rgba(55, 90, 6, 2)",
  },
  runAnimation: (arr, setup) => {
    const animator = createAnimator(setup);
    quickSort(
      arr,
      0,
      arr.length - 1,
      animator.setupPivot,
      animator.setupLeft,
      animator.setupRight,
      animator.animateSwap,
      animator.setupColors
    );
  },
};
