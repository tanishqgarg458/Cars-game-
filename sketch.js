//tanishq
var ball;
var database;
var position;
var gameState = 0
var playerCount 
var form,player,game
var allPlayers
var car1 
var car2
var car3 
var car4 
var cars

function setup(){
    createCanvas(displayWidth,displayHeight);
  ;
    database = firebase.database()
    game = new Game()
    //reading from the datebase
   game.getState()
   game.start();
   // player = new Player()
    
    

}

function draw(){
    background("white")
   // player.getCount()
//  player.updateCount(5)
 //   game.update(5)
   if(playerCount===4){
     game.update(1);   }

   if(gameState===1){
     game.play()
   }
   
}

