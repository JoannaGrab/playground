import { createAnimator } from "./animator";
import heapSort from "./algorithm";
import setupHeapView from "./setupHeapView";

export const heapsort = {
  id: "heap_sort",
  algorithm: "Heap Sort",
  description:
    "Heapsort algorithm involves preparing the list by first turning it into a max heap. The algorithm then repeatedly swaps the first value of the list with the last value, decreasing the range of values considered in the heap operation by one, and sifting the new first value into its position in the heap. This repeats until the range of considered values is one value in length.",
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
    label: "Heap sort analysis",
    backgroundColor: "rgba(5, 9, 64, 2)",
    borderColor: "rgba(5, 9, 64, 2)",
  },
  runAnimation: async (arr, setup) => {
    const setupHeap = setupHeapView(arr);
    const animator = createAnimator(setup, setupHeap);
    await animator.displayHeap();
    heapSort(arr, animator.animateSwap, animator.animateSwapLast);
  },
};
