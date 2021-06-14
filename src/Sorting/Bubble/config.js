import createAnimator from "./animator";
import bubbleSort from "./algorithm";

export const bubblesort = {
  id: "bubble_sort",
  algorithm: "Bubble Sort",
  description:
    "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
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
    label: "Bubble sort analysis",
    backgroundColor: "rgba(255, 159, 64, 2)",
    borderColor: "rgba(255, 159, 64, 2)",
  },
  runAnimation: (arr, setup) => {
    const animator = createAnimator(setup);
    bubbleSort(arr, animator.animate);
  },
};
