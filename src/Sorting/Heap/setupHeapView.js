export default function setupHeapView(arr) {
  const heapContainer = document.createElement("div");
  let setupHeap = {};

  const initialPositions = {
    0: {
      top: "75px",
      left: "362px",
    },
    1: {
      top: "150px",
      left: "275px",
    },
    2: {
      top: "150px",
      left: "450px",
    },
    3: {
      top: "250px",
      left: "225px",
    },
    4: {
      top: "250px",
      left: "325px",
    },
    5: {
      top: "250px",
      left: "400px",
    },
  };

  for (let i = 0; i < arr.length; i++) {
    const id = `heap${i}`;
    const heapItem = document.createElement("div");
    heapItem.setAttribute("class", `ball ball${i}`);
    heapItem.setAttribute("id", `${id}`);
    heapItem.innerHTML = arr[i];
    heapContainer.appendChild(heapItem);

    setupHeap[i] = {
      id: id,
      top: `${initialPositions[i].top}`,
      left: `${initialPositions[i].left}`,
    };
  }

  document.querySelector(".animation__container").appendChild(heapContainer);
  return setupHeap;
}
