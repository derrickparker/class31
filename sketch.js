const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//datatypes

var num1 = 15;
console.log(num1)  //integers

var num2 = 12.55;
console.log(num2)  //floating point number

var string = " Derrick 123 ;: "
console.log(string)

var bool = true; //boolean (true/false)
console.log(bool)

var a;
console.log(a)  //undefined datatype

a = null;    //null= nothing
console.log(a)

var arr1 = []; //empty array
console.log(arr1)

var arr2 = [12, 12.5, "hello", false, null, "derrick"] //multi datatype array
console.log(arr2);

console.log(arr2[2])

for(i=0; i<arr2.length;i++){
    console.log(arr2[i])
}

arr2.push(1011);
console.log(arr2)

arr2.push(264345);
console.log(arr2)

arr2.pop();
console.log(arr2);

arr2.pop();
console.log(arr2)

arr2.pop();
console.log(arr2);

               
var arr3 = [[15,25,35],
            [45,55,66],
            [77,45,66]]

console.log(arr3)  //2-d array




var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}