import generateList from "./generateList";
import bubbleSort from "./bubbleSort";
import createAnimator from "./animator";
import "regenerator-runtime/runtime";

const arr = generateList(6);

const animator = createAnimator(arr);

document.querySelector(".run__button").onclick = () => {
  bubbleSort(arr, animator.animate);
};
