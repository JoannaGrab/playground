export default function setupView(arr) {
  const animationContainer = document.createElement("div");
  let setup = {};

  for (let i = 0; i < arr.length; i++) {
    const id = `i${i}`;
    const animationItem = document.createElement("div");
    animationItem.setAttribute("class", `ballList`);
    animationItem.setAttribute("id", `${id}`);
    animationItem.innerHTML = arr[i];
    animationContainer.appendChild(animationItem);

    setup[i] = id;
  }
  document
    .querySelector(".animation__container")
    .appendChild(animationContainer);

  return setup;
}
