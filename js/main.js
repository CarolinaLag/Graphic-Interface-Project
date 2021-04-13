// const btn = document.querySelector("#knapp");
// btn.addEventListener('click', () => {
//     gsap.fromTo('.box', {rotation: 0 }, {rotation: 360, duration: 5} );
// });

window.addEventListener('load', function() {
    const tl = new gsap.timeline({ repeat: -1, repeatDelay: 2});

    // tl.fromTo('#parasoll', {y: -400}, {y:0, ease: Bounce.easeOut, duration: 1.2})
    TweenLite.to("#parasoll", 10, {rotation:700, ease:Power3.easeInOut})
})
