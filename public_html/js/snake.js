var snake;
var snakeLength;
var snakeSize;

var food;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
gameDraw();
snakeDraw();

//foodInitialize();

function gameInitialize() {
var canvas = document.getElementById("game-screen");
context = canvas.getContext("2d");

screenWidth = window.innerWidth;
screenHeight = window.innerHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

}

function gameLoop(){
    
}
   
   function gameDraw(){
       context.fillStyle = "rgb(3, 252, 236)";
       context.fillRect(0, 0, screenWidth, screenHeight);
   }
   
   function snakeInitialize() {
    snake = [];
    snakeLength = 5;
    snakeSize = 100;
    
    for(var index = snakeLength - 1; index >= 0; index--){
        snake.push( {
            x: index,
            y: 0
        });
       }
   
   }
   function snakeDraw() {
       for(var index = 0; index < snake.length; index++) {
           context.fillStyle = "white";
           context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
       }
       
   }
   
   function snakeUpdate() {
       
       var snakeHeadX = [0].x;
       var snakeHeadY = [0].y;
       
       snakeHeadX++;
       
   }
 
   
   