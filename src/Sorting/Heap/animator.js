import anime from "animejs/lib/anime.es";

export function createAnimator(setup, setupHeap) {
  const animator = {
    setup0: setup,
    setup1: setupHeap,

    displayHeap: () => {
      let balls = [];

      for (let obj in setupHeap) {
        balls.push(document.getElementById(setupHeap[obj].id));
      }

      const animation = animationDisplayHeap(balls, setupHeap);
      return animation.finished;
    },

    animateSwap: (a, b) => {
      let t1 = document.getElementById(setupHeap[a].id);
      let t2 = document.getElementById(setupHeap[b].id);

      let s1 = document.getElementById(setup[a]);
      let s2 = document.getElementById(setup[b]);

      // t1.style.borderWidth = "0.15em";
      // t1.style.borderStyle = "solid";
      // t1.style.borderColor = "red";

      // t2.style.borderWidth = "0.15em";
      // t2.style.borderStyle = "solid";
      // t2.style.borderColor = "green";

      let animation = setupHeapAnimationSwap(t1, t2, a, b, setupHeap);
      animation = setupAnimationSwap(s1, s2);

      const t = setupHeap[a].id;
      setupHeap[a].id = setupHeap[b].id;
      setupHeap[b].id = t;

      const s = setup[a];
      setup[a] = setup[b];
      setup[b] = s;

      return animation.finished;
    },

    animateSwapLast: (a, b, end) => {
      let t1 = document.getElementById(setupHeap[a].id);
      let t2 = document.getElementById(setupHeap[b].id);

      let s1 = document.getElementById(setup[a]);
      let s2 = document.getElementById(setup[b]);

      // t1.style.borderWidth = "0.15em";
      // t1.style.borderStyle = "solid";
      // t1.style.borderColor = "red";

      // t2.style.borderWidth = "0.15em";
      // t2.style.borderStyle = "solid";
      // t2.style.borderColor = "green";

      let animation = setupHeapAnimationSwapLast(t1, t2, end, setupHeap);
      animation = setupAnimationSwapLast(s1, s2);

      const t = setupHeap[a].id;
      setupHeap[a].id = setupHeap[b].id;
      setupHeap[b].id = t;

      const s = setup[a];
      setup[a] = setup[b];
      setup[b] = s;

      return animation.finished;
    },
  };

  return animator;
}

function animationDisplayHeap(balls, setupHeap) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: balls[0],
        top: `${setupHeap[0].top}`,
        left: `${setupHeap[0].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: balls[1],
        top: `${setupHeap[1].top}`,
        left: `${setupHeap[1].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: balls[2],
        top: `${setupHeap[2].top}`,
        left: `${setupHeap[2].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: balls[3],
        top: `${setupHeap[3].top}`,
        left: `${setupHeap[3].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: balls[4],
        top: `${setupHeap[4].top}`,
        left: `${setupHeap[4].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: balls[5],
        top: `${setupHeap[5].top}`,
        left: `${setupHeap[5].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    );

  return animation;
}

function setupHeapAnimationSwap(t1, t2, a, b, setupHeap) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: t1,
        top: `${setupHeap[b].top}`,
        left: `${setupHeap[b].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: t2,
        top: `${setupHeap[a].top}`,
        left: `${setupHeap[a].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    );

  return animation;
}

function setupAnimationSwap(s1, s2) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: s1,
        translateY: 50,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: s2,
        translateY: 50,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: s1,
        translateX: {
          value: 50,
        },
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      500
    )
    .add(
      {
        targets: s2,
        translateX: {
          value: -50,
        },
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      500
    )
    .add(
      {
        targets: s1,
        translateY: 0,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      1000
    )
    .add(
      {
        targets: s2,
        translateY: 0,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      1000
    );

  return animation;
}

function setupHeapAnimationSwapLast(t1, t2, end, setupHeap) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: t1,
        top: `${setupHeap[end].top}`,
        left: `${setupHeap[end].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: t2,
        top: `${setupHeap[0].top}`,
        left: `${setupHeap[0].left}`,
        duration: 2000,
        easing: "easeInOutQuad",
      },
      0
    );

  return animation;
}

function setupAnimationSwapLast(s1, s2) {
  const animation = anime.timeline({});

  animation
    .add(
      {
        targets: s1,
        translateY: 50,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: s2,
        translateY: 50,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      0
    )
    .add(
      {
        targets: s1,
        translateX: {
          value: 50,
        },
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      500
    )
    .add(
      {
        targets: s2,
        translateX: {
          value: -50,
        },
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      500
    )
    .add(
      {
        targets: s1,
        translateY: 0,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      1000
    )
    .add(
      {
        targets: s2,
        translateY: 0,
        duration: 2000,
        // easing: "easeInOutQuad",
      },
      1000
    );

  return animation;
}
