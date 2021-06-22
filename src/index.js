import "regenerator-runtime/runtime";
import Chart, { elements } from "chart.js/auto";
import data from "/dist/sorting.json";
import { config } from "./config";
import generateList from "./generateList";
import setupView from "./setupView";

document.getElementById("openNav").onclick = () => {
  openNav();
};
document.getElementById("closeNav").onclick = () => {
  closeNav();
};

const sortingContent = document.getElementById("sorting__content");
for (let element of config) {
  const algorithmContainer = document.createElement("li");
  const algorithmContent = document.createElement("a");
  algorithmContainer.appendChild(algorithmContent);
  algorithmContent.innerHTML = element.algorithm;
  algorithmContent.setAttribute("href", `#/${element.id}`);
  algorithmContent.setAttribute("id", `${element.id}`);
  sortingContent.appendChild(algorithmContainer);
  document.getElementById(`${element.id}`).onclick = () => {
    displayContent(element);
  };
}

// FUNCTIONS
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

function displayContent(element) {
  document.querySelector(".content__title").innerHTML = element.algorithm;
  document.querySelector(".content__description").innerHTML =
    element.description;

  const chartContent = document.querySelector(".content__chart");
  chartContent.innerHTML = "";
  const canvas = document.createElement("canvas");
  chartContent.appendChild(canvas);

  new Chart(canvas, {
    type: "line",
    data: {
      labels: element.chart.labels,
      datasets: [
        {
          label: element.chart.label,
          data: data,
          backgroundColor: element.chart.backgroundColor,
          borderColor: element.chart.borderColor,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Data size",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Time [ms]",
          },
        },
      },
      parsing: {
        xAxisKey: "n",
        yAxisKey: "t",
      },
    },
  });

  const animationContainer = document.querySelector(".animation__container");
  animationContainer.innerHTML = "";

  const arr = generateList(6);
  const setup = setupView(arr);

  document.querySelector(".run__button").onclick = () => {
    const animator = element.runAnimation(arr, setup);
  };
}
