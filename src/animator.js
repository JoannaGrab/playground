import anime from "animejs/lib/anime.es";

export default function createAnimator(arr) {
  const setup = setupView(arr);
  const animator = {
    setup: setup,
    animate: (a, b) => {
      let t1 = document.getElementById(setup[a]);
      let t2 = document.getElementById(setup[b]);

      const animation = setupAnimation(t1, t2);

      setup[a] = t2.getAttribute("id");
      setup[b] = t1.getAttribute("id");

      return animation.finished;
    },
  };
  return animator;
}

function setupView(arr) {
  const animationContainer = document.createElement("div");
  let setup = {};

  for (let i = 0; i < arr.length; i++) {
    const id = `i${i}`;
    const animationItem = document.createElement("div");
    animationItem.setAttribute("class", `ball ball${i}`);
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

function setupAnimation(t1, t2) {
  const animation = anime.timeline({});

  animation
    .add({
      targets: t1,
      translateY: 50,
    })
    .add({
      targets: t2,
      translateY: -50,
    })
    .add(
      {
        targets: t1,
        translateX: {
          value: "+=46",
        },
      },
      600
    )
    .add(
      {
        targets: t2,
        translateX: {
          value: "-=46",
        },
      },
      600
    )
    .add(
      {
        targets: t1,
        translateY: 0,
      },
      1200
    )
    .add(
      {
        targets: t2,
        translateY: 0,
      },
      1200
    );

  return animation;
}
