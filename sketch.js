
var database;
var allPlayers;
var gameState = 0;
var playerCount = 0;
var form , player, game;
var car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;
var GoldImg, SilverImg, BronzeImg;
var groundImg;
var cars;
var finishedPlayers = 0;
var pastFinished;
var distance = 0;

function preload()
{
   car1Img = loadImage("Images/car1.png");
   car2Img = loadImage("Images/car2.png");
   car3Img = loadImage("Images/car3.png");
   car4Img = loadImage("Images/car4.png");

   GoldImg = loadImage("Images/Gold.jpg");
   SilverImg = loadImage("Images/Silver.jpg");
   BronzeImg = loadImage("Images/Bronze.jpg");

   groundImg = loadImage("Images/track.jpg");
}
function setup()
{
    createCanvas(displayWidth - 20, displayHeight - 20 );
    database = firebase.database();
    //updating gameState
    game = new Game();
    game.getState();
    game.start();           
}
 
function draw()
{
     if(playerCount === 4 && finishedPlayers === 0)
     {
         game.update(1)
     }
     if(gameState === 1)
     {
         clear();
         game.play();
     }
     if(finishedPlayers === 4)
     {
           game.update(2)
     }
   if (gameState===2 && finishedPlayers === 4)
   {
       game.displayRank();
   }
}