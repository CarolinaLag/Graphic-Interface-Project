
window.addEventListener('load', function() {
   
    TweenLite.to("#parasoll", 10, {rotation:1080, ease:Power3.easeInOut, repeat: -1})

    TweenMax.to("#boat", 1, {y:"20", repeat:10, yoyo:true, ease:Sine.easeInOut, repeat: -1});

    TweenMax.to("#car", 1, {x:20, repeat:10, yoyo:true, ease:Sine.easeInOut, repeat: -1});

    TweenMax.to('.window',{scaleX: 1.2, scaleY: 1.2, yoyo:true, duration: 1, repeat: -1});
    // gsap.from( '#house' , { duration: 2, y: -50, ease: "bounce", delay: .5, repeat: -1 } );
})


const windowColors = ['rgb(241, 250, 123)', 'rgb(255, 255, 255)']
let currentColor = 0;

changeWindowColor = () => {
    gsap.to('.window', {
        fill: windowColors[currentColor],
        duration: 1,
        onComplete: changeWindowColor
    });
    currentColor++;
    if (currentColor > windowColors.length -1) {
        currentColor = 0;
    }
}
changeWindowColor();

