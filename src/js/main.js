window.addEventListener("load", function () {
  const mq = window.matchMedia("(max-width: 600px)");

  // TweenLite.to("#suitecase", 10, {rotation:1080, ease:Power3.easeInOut, repeat: -1})

  TweenMax.to("#car", 1, {
    x: 20,
    repeat: 10,
    yoyo: true,
    ease: Sine.easeInOut,
    repeat: -1,
  });

  TweenMax.to(".window", {
    scaleX: 1.2,
    scaleY: 1.2,
    yoyo: true,
    duration: 1,
    repeat: -1,
  });

  TweenMax.to("#boat", 1, {
    y: "20",
    repeat: 10,
    yoyo: true,
    ease: Sine.easeInOut,
    repeat: -1,
  });

  if (mq.matches) {
    gsap.to("#suitecase", {
      duration: 4,
      ease: Power2.easeInOut,
      yoyo: true,
      x: 100,
      rotation: 360,
      repeat: -1,
    });
  } else {
    gsap.to("#suitecase", {
      duration: 4,
      ease: Power2.easeInOut,
      yoyo: true,
      x: 400,
      rotation: 360,
      repeat: -1,
    });
  }
});

const windowColors = ["rgb(241, 250, 123)", "rgb(255, 255, 255)"];
let currentColor = 0;

changeWindowColor = () => {
  gsap.to(".window", {
    fill: windowColors[currentColor],
    duration: 1,
    onComplete: changeWindowColor,
  });
  currentColor++;
  if (currentColor > windowColors.length - 1) {
    currentColor = 0;
  }
};
changeWindowColor();
