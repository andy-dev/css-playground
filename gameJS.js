window.addEventListener('load', function(){

  var GAME_WIDTH = 640;
  var GAME_HEIGHT = 360;

  var enemies = [
    {
      x: 100, //x coordinate
      y: 100, //y coordinate
      speedY: 1, //speed in Y
      speedX: 2,
      w: 40, //width
      h: 40 //heght
    },
    {
      x: 260,
      y: 100,
      speedY: 2,
      speedX: 1,
      w: 40,
      h: 40
    },
    {
      x: 380,
      y: 100,
      speedY: 2,
      speedX: 4,
      w: 40,
      h: 40
    }
  ];

  var player = {
    x:10,
    y:160,
    speedX: 3,
    w: 20,
    h:20,
    isMoving: false
  }

  var movePlayer = function(){
    player.isMoving = true;
  }

  var stopPlayer = function(){
    player.isMoving = false;
  }

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  canvas.addEventListener("mousedown", movePlayer);
  canvas.addEventListener("mouseup", stopPlayer);
  canvas.addEventListener("touchstart", movePlayer);
  canvas.addEventListener("touchend", stopPlayer)

  var update = function() {

    if(player.isMoving){
      player.x += player.speedX;
    }

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


    ctx.fillStyle = "blue"
    ctx.fillRect(player.x,player.y,player.w,player.h)

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
});