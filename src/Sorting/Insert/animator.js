import anime from "animejs/lib/anime.es";

export default function createAnimator(setup) {
  const animator = {
    setup: setup,
    animateExit: (a) => {
      let t1 = document.getElementById(setup[a]);
      const animation = setupAnimationExit(t1);
      return animation.finished;
    },

    animateSwap: (a, b) => {
      let t1 = document.getElementById(setup[a]);
      let t2 = document.getElementById(setup[b]);

      const animation = setupAnimationSwap(t1, t2);

      setup[a] = t2.getAttribute("id");
      setup[b] = t1.getAttribute("id");

      return animation.finished;
    },

    animateEntry: (a) => {
      let t1 = document.getElementById(setup[a]);
      const animation = setupAnimationEntry(t1);
      return animation.finished;
    },
  };
  return animator;
}

function setupAnimationExit(t1) {
  const animation = anime.timeline({});

  animation.add({
    targets: t1,
    translateY: 50,
  });
  return animation;
}

function setupAnimationSwap(t1, t2) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: t1,
        translateX: {
          value: "+=46",
        },
      },
      100
    )
    .add(
      {
        targets: t2,
        translateX: {
          value: "-=46",
        },
      },
      100
    );
  return animation;
}

function setupAnimationEntry(t1) {
  const animation = anime.timeline({});

  animation.add({
    targets: t1,
    translateY: 0,
  });
  return animation;
}
