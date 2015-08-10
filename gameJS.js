var GAME_HEIGHT = 360;
var GAME_WIDTH = 100%;

var enemeies [
  {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    speedX = 2,
    speedY = 2,
  },
   {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    speedX = 2,
    speedY = 2,
  },
   {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    speedX = 2,
    speedY = 2,
  },
];

var canvas = document.getElementById("myCanvas")
var context = canvas.getContext("2d")

var update = function () {

  enemies.forEach(function(element, index){
    element.y += element.speedY
    element.x += element.speedX
  })

}

var draw = function(){

  ctx.clearRect(0,0,GAME_HEIGHT,GAME_WIDTH)
  ctx.fillStyle

}

var step = function(){

}

step()




    var update = function() {

      var i = 0;
      var n = enemies.length;

      enemies.forEach(function(element, index){
        element.y += element.speedY;
        element.x += element.speedX;

        if(element.y <= 10) {
          element.y = 10;
          element.speedY *= -1;
        }
        else if(element.y >= GAME_HEIGHT - 50) {
          element.y = GAME_HEIGHT - 50;
          element.speedY *= -1;
        }

        if(element.x <= 10) {
          element.x = 10;
          element.speedX *= -1;
        }
        else if(element.x >= GAME_WIDTH - 50) {
          element.x = GAME_WIDTH - 50;
          element.speedX *= -1;
        }
      });
    };

    var draw = function() {
      ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
      ctx.fillStyle = "orange";

      enemies.forEach(function(element, index){
        ctx.fillRect(element.x, element.y, element.w, element.h);
      });
    };

    var step = function() {

      update();
      draw();

      window.requestAnimationFrame(step);
    };

    step();