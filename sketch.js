const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var eB1, eT1, b;
var b1, t1, b2, t2, b3, t3, b4, t4, b5, t5, t6, b6;

var t7,t8,t9,t10,t11;

var t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30;

var b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30;

var t31, t32, t33, t34, t35, t36, t37, t38, t39, t40;

var b31, b32, b33, b34, b35, b36, b37, b38, b39, b40;

var b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60

var t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60;
var ground;

var player;
var plr;

var exp;

var Xp;

var bg;
var t;

var shps;

var angle = 0;

var ob1;

var d;

var gravity;

var r;
function preload() {
  eT1 = loadImage('images/eT1.jpg');
  eB1 = loadImage('images/y.jpg')
  b = loadImage('images/bk.jpg');
  bg = loadImage('images/bbb.png');
  
    }



function setup(){
    var canvas = createCanvas(displayWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    /*engine = Engine.create(document.body, {
      world: {
        gravity: { x:0, y:0.17 }
      }
    }*/
    
    b1 = new JBody(150,windowHeight-250,60,220,eB1);
    t1 = new JBody(150,b1.body.position.y-143,60,60,eT1);

     b2 = new JBody(380,windowHeight-258,60,260,eB1);
     t2 = new JBody(380,360,60,60,eT1);
   
     b3 = new JBody(610,530,60,180,eB1);
     t3 = new JBody(610,380,60,60,eT1);
   
     b4 = new JBody(840,550,60,140,eB1);
     t4 = new JBody(840,420,60,60,eT1);
   
     b5 = new JBody(1070,570,60,100,eB1);
     t5 = new JBody(1070,530,60,60,eT1);

   //because there won't be a bottom block for ->
    t6 = new JBody(1300,585,60,60,eT1);
  
    b6 = new JBody(1530,570,60,100,eB1);
    t7 = new JBody(1530,530,60,60,eT1);


    t8 = new JBody(1760,490,60,60,eT1);
    t9 = new JBody(1820+3,490,60,60,eT1);
    t10 = new JBody(1880+6,490,60,60,eT1);
    t11 = new JBody(1940+9,490,60,60,eT1);

    t12 = new JBody(2179,585,60,60,eT1);
  
    b7 = new JBody(2409,525,60,60,eB1);
    b8 = new JBody(2469+1,525,60,60,eB1);
    b9 = new JBody(2529+2,525,60,60,eB1);
    b10 = new JBody(2589+3,525,60,60,eB1);
    b11 = new JBody(2649+4,525,60,60,eB1);
    b12 = new JBody(2709+5,525,60,60,eB1);
    b13 = new JBody(2769+6,525,60,60,eB1);
    b14 = new JBody(2829+7,525,60,60,eB1);
    b15 = new JBody(2889+8,525,60,60,eB1);
    b16 = new JBody(2949+9,525,60,60,eB1);
    b17 = new JBody(3009+10,525,60,60,eB1);

    t13 = new JBody(3250,585,60,60,eT1);
  
    t14 = new JBody(3480,420,60,60,eT1);
   
    t15 = new JBody(3710,420,60,60,eT1);
    b18 = new JBody(3710,540,60,180,eB1);
     
    t16 = new JBody(3940,420,60,60,eT1);
    b19 = new JBody(3940,540,60,180,eB1);

    t17 = new JBody(4170,585,60,60,eT1);
  
    t18 = new JBody(4400,450,60,60,eT1);

    t19 = new JBody(4630,520,60,60,eT1);

    t20 = new JBody(4860,420,60,60,eT1);
   
    b20 = new JBody(5090,windowHeight-253,60,260,eB1);
    t21 = new JBody(5090,340,60,60,eT1);

    t22 = new JBody(5320,380,60,60,eT1);
   
    t23 = new JBody(5550,420,60,60,eT1);
    t24 = new JBody(5610+1,420,60,60,eT1);
    t25 = new JBody(5670+2,420,60,60,eT1);
    t26 = new JBody(5730+3,420,60,60,eT1);
   
    b21 = new JBody(5963,420,60,390,eB1);
    b22 = new JBody(6023+5,420,60,390,eB1);
    b23 = new JBody(6083+10,420,60,390,eB1);
    b24 = new JBody(6143+15,420,60,390,eB1);
    
    b25 = new JBody(6388,490,60,250,eB1);
    t27 = new JBody(6388,335,60,60,eT1);
    b26 = new JBody(6448+5,490,60,250,eB1);
    t28 = new JBody(6448+5,335,60,60,eT1);
    b27 = new JBody(6508+10,490,60,250,eB1);
    t29 = new JBody(6508+10,335,60,60,eT1);
    b28 = new JBody(6568+15,490,60,250,eB1);
    t30 = new JBody(6568+15,335,60,60,eT1);
    
    b29 = new JBody(6813,500,60,230,eB1);
    b30 = new JBody(6873+5,500,60,230,eB1);
    b31 = new JBody(6933+10,500,60,230,eB1);
    b32 = new JBody(6993+15,500,60,230,eB1);
    
    b33 = new JBody(7238,460,60,310,eB1);
    t31 = new JBody(7238,275,60,60,eT1);
    b34 = new JBody(7298+5,460,60,310,eB1);
    t32 = new JBody(7298+5,275,60,60,eT1);
    b35 = new JBody(7358+10,460,60,310,eB1);
    t33 = new JBody(7358+10,275,60,60,eT1);

    b36 = new JBody(7598,500,60,230,eB1);
    b37 = new JBody(7658+5,500,60,230,eB1);
    b38 = new JBody(7718+10,500,60,230,eB1);
    b39 = new JBody(7778+15,500,60,230,eB1);
    b40 = new JBody(7838+20,500,60,230,eB1);
    b41 = new JBody(7898+25,500,60,230,eB1);
    //
    b42 = new JBody(8153,460,60,310,eB1);
    t34 = new JBody(8153,275,60,60,eT1);
    b43 = new JBody(8213+5,460,60,310,eB1);
    t35 = new JBody(8213+5,275,60,60,eT1);
    b44 = new JBody(8273+10,460,60,310,eB1);
    t36 = new JBody(8273+10,275,60,60,eT1);

    t37 = new JBody(8513,310,60,60,eT1);
  
    t38 = new JBody(8743,370,60,60,eT1);
  
    t39 = new JBody(8973,430,60,60,eT1);
  
    b45 = new JBody(9203,585,60,60,eB1);
  
    t40 = new JBody(9433,430,60,60,eT1);
    t41 = new JBody(9493+3,430,60,60,eT1);
  
    t42 = new JBody(9726,585,60,60,eT1);
    b46 = new JBody(9786+3,585,60,60,eB1);
    t43 = new JBody(9846+6,585,60,60,eT1);
  
    b47 = new JBody(10082,570,60,100,eB1);
    t44 = new JBody(10082,530,60,60,eT1);

    b48 = new JBody(10312,550,60,140,eB1);
    t45 = new JBody(10312,490,60,60,eT1);
   
    b49 = new JBody(10542,530,60,180,eB1);
    t46 = new JBody(10542,420,60,60,eT1);

    b50 = new JBody(10772,490,60,250,eB1);
    t47 = new JBody(10772,335,60,60,eT1);

    b51 = new JBody(11002,440,60,350,eB1);
    t48 = new JBody(11002,240,60,60,eT1);

    b52 = new JBody(11232,390,60,450,eB1);
    t49 = new JBody(11232,135,60,60,eT1);

        b53 = new JBody(11462,375,60,480,eB1);
         t50 = new JBody(11462,105,60,60,eT1);

   b54 = new JBody(11692,390,60,450,eB1);
  t51 = new JBody(11692,135,60,60,eT1);

  b55 = new JBody(11922,440,60,350,eB1);
  t52 = new JBody(11922,240,60,60,eT1);

  b56 = new JBody(12152,490,60,250,eB1);
  t53 = new JBody(12152,335,60,60,eT1);

  b57 = new JBody(12382,530,60,180,eB1);
  t54 = new JBody(12382,420,60,60,eT1);

  b58 = new JBody(12612,550,60,140,eB1);
  t55 = new JBody(12612,490,60,60,eT1);
   
  b59 = new JBody(12842,570,60,100,eB1);
  t56 = new JBody(12842,530,60,60,eT1);

  t57 = new JBody(13072,490,60,60,eT1);
  
  t58 = new JBody(13302,550,60,60,eT1);
  b60 = new JBody(13362+3,550,60,60,eB1);
  
  t59 = new JBody(13595,450,60,60,eT1);
  
  b61 = new JBody(13825,380,60,60,eB1);
  
  t60 = new JBody(14005,450,60,60,eT1);
  
  b62 = new JBody(14285,490,60,250,eB1);
  t61 = new JBody(14285,335,60,60,eT1);
  t62 = new JBody(14345+5,335,60,60,eT1);
  b63 = new JBody(14345+5,490,60,250,eB1); 
   

    
    //b3 = new JBody(150,b2.body.position.y-69,60,60,'lightblue')
    ground = new JBody(displayWidth/2,625,displayWidth*20,20,eT1);
   
    //ellipseMode(RADIUS);
    player = createSprite(t1.body.position.x, t1.body.position.y - 50,40,40);
   player.shapeColor = "pink";
    //player = new Player();
    
    exp = createSprite(100,0,200,100);
   exp.velocityX = 0;
   exp.shapeColor = "white"
   exp.visible = true;

   gravity = 0.6;
   //bOb1 = createSprite(b7.body.position.x,b7.body.position.y-200,200,100);
   //bOb1.velocityY = 4;
   //bOb1.shapeColor = "green"
  
  

fill(255)

angleMode(DEGREES);




   
   //plr = createSprite(150,300,60,60)
  //t = new Polygon(650,150,3,30)
   Engine.run(engine);
}



function draw(){
  background(80);
  //Engine.update(engine);

  b1.display();
  t1.display();


  b2.display();
  t2.display();

  b3.display();
  t3.display();

  b4.display();
  t4.display();

  b5.display();
  t5.display();

  t6.display();

  ground.display();

  b6.display();
  t7.display();

  t8.display();
  t9.display();
  t10.display();
  t11.display();

  t12.display();

  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();

  t13.display();

  t14.display();

  t15.display();
  b18.display();

  t16.display();
  b19.display();

  t17.display();
  
  t18.display();
  t19.display();
  t20.display();
  
  t21.display();
  b20.display();

  t22.display();
  
  t23.display();
  t24.display();
  t25.display();
  t26.display();
  
  b21.display();
  b22.display();
  b23.display();
  b24.display();

  b25.display();
  t27.display();
  b26.display();
  t28.display();
  b27.display();
  t29.display();
  b28.display();
  t30.display();
  
  b29.display();
  //t31.display();
  b30.display();
  //t32.display();
  b31.display();
  //t33.display();
  b32.display();
  //t34.display();
  
  b33.display();
  t31.display();
  b34.display();
  t32.display();
  b35.display();
  t33.display();

  b41.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
 
  b42.display();
  b43.display();
  b44.display();
  t34.display();
  t35.display();
  t36.display();

  t37.display();

  t38.display();

  t39.display();

  b45.display();
  
  t40.display();
  t41.display();

  t42.display();
  b46.display();
  t43.display();

  b47.display();
  t44.display();

  b48.display();
  t45.display();

  b49.display();
  t46.display();

  b50.display();
  t47.display();

  b51.display();
  t48.display();

  b52.display();
  t49.display();

  b53.display();
  t50.display();

  b54.display();
  t51.display();

  b55.display();
  t52.display();

  b56.display();
  t53.display();

  b57.display();
  t54.display();

  b58.display();
  t55.display();

  b59.display();
  t56.display();

  t57.display();

  t58.display();
  b60.display();

  t59.display();
  
  b61.display();

  t60.display();

  b62.display();
  t61.display();
  t62.display();
  b63.display();

  camera.position.x = exp.x;

 // player.velocityX = 3;

 //player.collide(t1.body);

 /*if(keyDown("SPACE"))
 {
  player.velocityY = -10;

 }*/
    
  //player.velocityX = player.velocityX - 0.8;

  //player.velocityY = player.velocityY + 0.8;

  
  /**/
  
creatingObstacles();
jump(t1.body);

//BOb1.bounceOff(b7.body);

  drawSprites();
}


function creatingObstacles()
{
  
  push();
  //ellipse(b3.body.position.x,430,30,30)
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(b3.body.position.x,425);
  rotate(angle);
  ob1 = rect(0,0,10,280);
  
  pop();
  noStroke();
  fill(0)
  ellipse(b3.body.position.x,425,30,30);
///////////////////
  ////
   push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(b4.body.position.x,465);
  rotate(angle);
  ob2 = rect(0,0,10,240);
  
  pop();
  noStroke();
  fill(0)
  ellipse(b4.body.position.x,465,30,30);
//////////////
  /////
  push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(b10.body.position.x,b10.body.position.y);
  rotate(angle);
  ob3 = rect(0,0,10,200);
  
  pop();
  noStroke();
  fill(0)
  ellipse(b10.body.position.x,b10.body.position.y,30,30)
  
  /////////////////
  /////
  push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(b13.body.position.x,b13.body.position.y);
  rotate(angle);
  ob4 = rect(0,0,10,200);
  
  pop();
  noStroke();
  fill(0)
  ellipse(b13.body.position.x,b13.body.position.y,30,30);

  /////////////////////
  ////
  push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(b16.body.position.x,b16.body.position.y);
  rotate(angle);
  ob5 = rect(0,0,10,200);
  
  pop();
  noStroke();
  fill(0)
  ellipse(b16.body.position.x,b16.body.position.y,30,30)
  
  /////////////////////
  ////
  push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(t18.body.position.x,t18.body.position.y);
  rotate(angle);
  ob6 = rect(0,0,10,240);
  
  pop();
  noStroke();
  fill(0)
  ellipse(t18.body.position.x,t18.body.position.y,30,30);

  /////////////////////
  ////
  push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(t20.body.position.x,t20.body.position.y);
  rotate(angle);
  ob7 = rect(0,0,10,240);
  
  pop();
  noStroke();
  fill(0)
  ellipse(t20.body.position.x,t20.body.position.y,30,30)
  
  /////////////////////
  ////
  push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(t25.body.position.x+30,t25.body.position.y);
  rotate(angle);
  ob8 = rect(0,0,10,130);
  
  pop();
  noStroke();
  fill(0)
  ellipse(t25.body.position.x+30,t25.body.position.y,30,30)
  
  /////////////////////
  ////
  push();
  noFill();
  stroke("cyan");
  strokeWeight(3);
  rectMode(CENTER);
 
  translate(t25.body.position.x+30,t25.body.position.y);
  rotate(angle);
  ob8 = rect(0,0,10,130);
  
  pop();
  noStroke();
  fill(0)
  ellipse(t25.body.position.x+30,t25.body.position.y,30,30)
  
  









  angle = angle + 3
  
  


}


function jump(body)
{
  d = dist(player.x,player.y,body.position.x,body.position.y);

  //console.log(d);

  if(d<70)
  {
    //player.x = 100;
    //player.y = 100;
    //console.log("there u go gurl!")

    r = body.position.x;

    if(keyCode === 32)
    {
      player.velocityX = 3;
      player.velocityY = -7
    }

    if(player.x > r+165 && player.y < 60)
    {
      player.velocityX = 3;
      player.velocityY = 8
    }
  }
}




/*function keyPressed()
{
  if(keyDown("SPACE"))
  {
  }
    }

function detectCollision(player1,body1)
{
player1.x = player1.x;
player1.y = player1.y;


body1Position = body1.body.position;

var distance= dist(body1Position.x,body1Position.y,player1.x,player1.y)
if(distance<=  player1.width/2 + body1.width/2 || distance<= player1.height/2 + body1.height/2)
{
 // Matter.Body.setStatic(lmango.body,false);
 return true;
}

else{
  return  false;
}
}*/





























  //t.display();
  

 
 



   
  //player.display();

  /*if(player.body.position.y >= 600)
  {
    player.body.position.x =  player.body.position.x+ 5
 
  }*/
  
 

// b3.display();
//rect(ground.position.x,ground.position.y,windowWidth,20);
 







///// other things down here ->
//camera.position.x = exp.x;
//triangle(100,100,100-30,100+60,100+30,100+60)
//triangle.shapeColor = "white"




 //// functions down here ->
 //keyPressed();
 //plr.velocityX = plr.velocityX - 0.8;
    //plr.velocityY = plr.velocityY - 0.8;

    /*if(keyDown("space"))
    {
      player.velocityX = 5;
        player.velocityY = -3;
        //jumpSound.play();
        player.velocityY = player.velocityY + 0.8
  
        
    }
    if(player.velocityY < 0)
    {
     
    }*/
   
    
    //add gravity
    
   
 /*for(var i = 150; i<displayWidth * 2; i = i+ 230)
 {
   fill(0)
   rectMode(CENTER);
  rect(i,100,50,50)
 }*/

 
 
// keyPressed()
 












   // plr.velocityX = 2;
    //plr.velocityY = -4;

    

    //Body.applyForce( t.body, t.body.position, {x: 2, y : -2.05});
  //Body.setVelocity(player.body,{x : 6, y: -7})
 /* player.VelocityX = 0;
  player.velocityY = -10;

  player.velocityY = player.velocityY + 0.8*/
  //Body.setVelocity(player.body,{x : play, y: -10})

  //Body.setAngularVelocity(player.body,{x:10,y:-10})
  //player.setVelocity(5)
  //angleMode(RADIANS)
  //Body.setAngularVelocity(t, Math.PI/6);
  //}
  
 /* if(keyCode === DOWN_ARROW)
  {
   // plr.velocityX = 2;
    //plr.velocityY = -4;

    

    //Body.applyForce( player.body, player.body.position, {x: 2, y : -2.05});
  Body.setVelocity(player.body,{x : 1, y: 0})
  
  //Body.setVelocity(player.body,{x : play, y: -10})

  //Body.setAngularVelocity(player.body,{x:10,y:-10})
  //player.setVelocity(5)
  
  }*/
  
//}


