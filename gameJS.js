window.addEventListener('load', function(){

  var GAME_WIDTH = 640;
  var GAME_HEIGHT = 360;
  var gameLive = true;
  var level = 1;

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

  var sprites = {};

  var goal = {
    x: 580,
    y: 160,
    w: 36,
    h: 36
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

   var load = function() {
        sprites.player = new Image();
        sprites.player.src = 'images/hero.png';

        sprites.background = new Image();
        sprites.background.src = 'images/floor.png';

        sprites.enemy = new Image();
        sprites.enemy.src = 'images/enemy.png';

        sprites.goal = new Image();
        sprites.goal.src = 'images/chest.png';
      };

  var update = function() {

    if(checkCollision(player, goal)){

        level++;
        player.x = 10;
        player.y = 160;
        stopPlayer();

        enemies.forEach(function(element,index){
          element.speedY += element.speedY/Math.abs(element.speedY);
        });
        alert("level " + level);
    }

    if(player.isMoving){
      player.x += player.speedX;
    }

    enemies.forEach(function(element, index){

      if(checkCollision(player, element)){

        gameLive = false;

        alert('Game Over');

        window.location = ""; // this reloads page

      }

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

      if(element.x <= 100) {
        element.x = 100;
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

    ctx.drawImage(sprites.player, player.x, player.y);
    // ctx.fillStyle = "blue"
    // ctx.fillRect(player.x,player.y,player.w,player.h)

    ctx.fillStyle = "orange";
    enemies.forEach(function(element, index){
      ctx.fillRect(element.x, element.y, element.w, element.h);
    });


    // ctx.fillStyle = "rgb(128,128,0)";
    // ctx.fillRect(goal.x, goal.y, goal.w, goal.h);
    ctx.drawImage(sprites.goal, goal.x, goal.y);
  };

  var step = function() {

    update();
    draw();

    if(gameLive){
      window.requestAnimationFrame(step);
    }
  };

  var checkCollision = function(rect1,rect2){
    var closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.w, rect2.w);
    var closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.h, rect2.h);

    return closeOnHeight && closeOnWidth
  }
  load();
  step();
});