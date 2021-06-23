import anime from "animejs/lib/anime.es";

export default function createAnimator(setup) {
  const animator = {
    setup: setup,

    setupPivot: (a) => {
      let p = document.getElementById(setup[a]);
      const animation = showPivot(p);
      return animation.finished;
    },

    setupLeft: (a) => {
      let l = document.getElementById(setup[a]);
      const animation = showLeft(l);
      return animation.finished;
    },

    setupRight: (a) => {
      let r = document.getElementById(setup[a]);
      const animation = showRight(r);
      return animation.finished;
    },

    animateSwap: (a, b) => {
      let t1 = document.getElementById(setup[a]);
      let t2 = document.getElementById(setup[b]);

      const animation = setupAnimationSwap(t1, t2, a, b);

      setup[a] = t2.getAttribute("id");
      setup[b] = t1.getAttribute("id");

      return animation.finished;
    },

    setupColors: (elements) => {
      let a = [];
      for (let e in elements) {
        a.push(document.getElementById(setup[e]));
      }

      const animation = resetColors(a);

      return animation.finished;
    },
  };
  return animator;
}

function showPivot(p) {
  const animation = anime.timeline({});

  animation.add({
    targets: p,
    backgroundColor: "#FFF",
  });
  return animation;
}

function showLeft(l) {
  const animation = anime.timeline({});

  animation.add({
    targets: l,
    backgroundColor: "#F00",
  });
  return animation;
}

function showRight(r) {
  const animation = anime.timeline({});

  animation.add({
    targets: r,
    backgroundColor: "#0080f6",
  });
  return animation;
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
      },
      0
    )
    .add(
      {
        targets: t2,
        translateY: {
          value: -50,
        },
      },
      0
    )
    .add(
      {
        targets: t1,
        translateX: {
          value: `+=${(b - a) * 50}`,
        },
      },
      500
    )
    .add(
      {
        targets: t2,
        translateX: {
          value: `-=${(b - a) * 50}`,
        },
      },
      500
    )
    .add(
      {
        targets: [t1, t2],
        translateY: {
          value: 0,
        },
      },
      1000
    );
  return animation;
}

function resetColors(a) {
  const animation = anime.timeline({});

  animation.add({
    targets: a,
    backgroundColor: "#95AD95",
  });
  return animation;
}
