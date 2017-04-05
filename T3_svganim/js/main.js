var snapStage, stars, moon;
snapStage = Snap("#svg");
stars = snapStage.image("images/stars.png", 0, 0, 720, 300);
moon = snapStage.image("images/moon.png", 550, 300, 88, 84);
snapStage.image("images/mountains.png", 0, 0, 720, 300);

moon.animate({y:-200}, 20000,mina.easeOut);
setInterval(function(){
    setTimeout(function () {stars.animate({opacity:0.6}, 200,mina.easeOut);}, 500);
    setTimeout(function () {stars.animate({opacity:1}, 100,mina.easeIn);}, 800);
    setTimeout(function () {stars.animate({opacity:0.6}, 100,mina.easeOut);}, 900);
    setTimeout(function () {stars.animate({opacity:1}, 100,mina.easeIn);}, 1000);
}, 5000);
