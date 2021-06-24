import anime from "animejs/lib/anime.es";

export function createAnimator(setup) {
  const animator = {
    setup: setup,

    displayGap: (gap) => {
      const contentAnimation = document.querySelector(".content__animation");
      const gapContainer = document.createElement("div");
      gapContainer.innerHTML = `Gap: ${gap}`;
      contentAnimation.appendChild(gapContainer);
    },

    animateSwap: (a, b) => {
      let t1 = document.getElementById(setup[a]);
      let t2 = document.getElementById(setup[b]);

      let animation = setupAnimationSwap(t1, t2, a, b);

      const t = setup[a];
      setup[a] = setup[b];
      setup[b] = t;

      return animation.finished;
    },

    showCurrent: (a, b) => {
      let t1 = document.getElementById(setup[a]);
      let t2 = document.getElementById(setup[b]);

      let animation = showColor(t1, t2);

      return animation.finished;
    },

    resetCurrent: (a, b) => {
      let t1 = document.getElementById(setup[a]);
      let t2 = document.getElementById(setup[b]);

      let animation = resetColor(t1, t2);

      return animation.finished;
    },
  };

  return animator;
}

function setupAnimationSwap(t1, t2, a, b) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: t1,
        translateY: {
          value: 50,
        },
        duration: 2000,
      },
      0
    )
    .add(
      {
        targets: t2,
        translateY: {
          value: -50,
        },
        duration: 2000,
      },
      0
    )
    .add(
      {
        targets: t1,
        translateX: {
          value: `+=${(b - a) * 40}`,
        },
        duration: 2000,
      },
      500
    )
    .add(
      {
        targets: t2,
        translateX: {
          value: `-=${(b - a) * 40}`,
        },
        duration: 2000,
      },
      500
    )
    .add(
      {
        targets: [t1, t2],
        translateY: {
          value: 0,
        },
        duration: 2000,
      },
      1000
    );

  return animation;
}

function showColor(t1, t2) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: t1,
        backgroundColor: "#F00",
      },
      0
    )
    .add(
      {
        targets: t2,
        backgroundColor: "#0080f6",
      },
      0
    );

  return animation;
}

function resetColor(t1, t2) {
  const animation = anime.timeline({});

  animation.add({
    targets: [t1, t2],
    backgroundColor: "rgb(149, 173, 149)",
  });

  return animation;
}
