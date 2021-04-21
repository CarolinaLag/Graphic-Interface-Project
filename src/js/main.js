window.addEventListener("load", function () {
  const mq = window.matchMedia("(max-width: 600px)");
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  
  let carAnimation = TweenMax.to("#car", 1, {
    x: 20,
    repeat: 10,
    yoyo: true,
    ease: Sine.easeInOut,
    repeat: -1,
  });

  if (!mediaQuery || mediaQuery.matches) {
    carAnimation.kill();
  }

  let windowScaleAnimation = TweenMax.to(".window", {
    scaleX: 1.2,
    scaleY: 1.2,
    yoyo: true,
    duration: 1,
    repeat: -1,
  });

  if (!mediaQuery || mediaQuery.matches) {
    windowScaleAnimation.kill();
  }

  let boatAnimation = TweenMax.to("#boat", 1, {
    y: "20",
    repeat: 10,
    yoyo: true,
    ease: Sine.easeInOut,
    repeat: -1,
  });

  if (!mediaQuery || mediaQuery.matches) {
    boatAnimation.kill();
  }

 
  if (mq.matches) {
    let suitecaseAnimation = gsap.to("#suitecase", {
      duration: 4,
      ease: Power2.easeInOut,
      yoyo: true,
      x: 100,
      rotation: 360,
      repeat: -1,
    });
    if (!mediaQuery || mediaQuery.matches) {
      suitecaseAnimation.kill();
    }
  } else {
    let suitecaseAnimation = gsap.to("#suitecase", {
      duration: 4,
      ease: Power2.easeInOut,
      yoyo: true,
      x: 300,
      rotation: 360,
      repeat: -1,
    });
    if (!mediaQuery || mediaQuery.matches) {
      suitecaseAnimation.kill();
    }
  }
});

const windowColors = ["rgb(241, 250, 123)", "rgb(255, 255, 255)"];
let currentColor = 0;
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

   changeWindowColor = () => {
    let changeWindowColorAnimation = gsap.to(".window", {
      fill: windowColors[currentColor],
      duration: 1,
      onComplete: changeWindowColor,
    });
    currentColor++;
    if (currentColor > windowColors.length - 1) {
      currentColor = 0;
    }
    if (!mediaQuery || mediaQuery.matches) {
      changeWindowColorAnimation.kill();
    }
  };
  changeWindowColor();

  