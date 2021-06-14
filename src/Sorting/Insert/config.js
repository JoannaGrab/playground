import createAnimator from "./animator";
import insertionSort from "./algorithm";

export const insertionsort = {
  id: "insertion_sort",
  algorithm: "Insertion Sort",
  description:
    "Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain. ",
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
    label: "Insertion sort analysis",
    backgroundColor: "rgba(185, 59, 64, 2)",
    borderColor: "rgba(185, 59, 64, 2)",
  },
  runAnimation: (arr, setup) => {
    const animator = createAnimator(setup);
    insertionSort(
      arr,
      animator.animateExit,
      animator.animateSwap,
      animator.animateEntry
    );
  },
};
