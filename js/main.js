
window.addEventListener('load', function() {
   
    TweenLite.to("#parasoll", 10, {rotation:1080, ease:Power3.easeInOut, repeat: -1})

    TweenMax.to("#boat", 1, {y:"20", repeat:10, yoyo:true, ease:Sine.easeInOut, repeat: -1});

    TweenMax.to("#car", 1, {x:20, repeat:10, yoyo:true, ease:Sine.easeInOut, repeat: -1});

    function Tween(){
        let T = TweenLite.to("#house",0.15,{x:R(-10,10),y:R(-10,10),scale:R(1.1,0.9),rotation:R(-10,10),ease:Sine.easeInOut,onComplete:Tween})
        };
        
        Tween();
        
        function R(max,min){return Math.random()*(max-min)+min};
})
