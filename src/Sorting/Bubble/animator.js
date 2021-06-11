import anime from "animejs/lib/anime.es";

export default function createAnimator(setup) {
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
