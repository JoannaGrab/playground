import generateList from "./src/generateList.js";
import bubbleSort from "./src/Sorting/Bubble/algorithm.js";
import insertionSort from "./src/Sorting/Insert/algorithm.js";
import { performance } from "perf_hooks";
import { writeFile } from "fs";

var dataSet = [];
const arrSize = [10, 100, 1000, 5000, 10000, 15000, 20000, 25000, 50000];

for (const size of arrSize) {
  const arr = generateList(size);
  const times = 10;
  var totalTime = 0;

  for (let i = 0; i < times; i++) {
    const start = performance.now();
    bubbleSort(arr);
    const end = performance.now();
    const duration = end - start;
    totalTime = totalTime + +duration;
  }
  const avgTime = totalTime / times;
  // console.log(
  //   `size: ${size}, total time: ${totalTime}, average time: ${avgTime}`
  // );

  dataSet.push({ n: size, t: avgTime });
}

// console.log(dataSet);

writeFile("dist/sorting.json", JSON.stringify(dataSet), (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
