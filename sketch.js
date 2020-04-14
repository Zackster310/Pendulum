const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var platform,pendulum,string;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(400,200,700,20);
   
    pendulum = new Circle(400,400,50);

    string = new Chain(platform,pendulum);
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    text("Press 'space' to set the pendulum's position to your mouse",50,20);
    text("Press any other key to realease the pendulum",50,40);
    text("Press 'enter' to reset the pendulum",50,100);

    platform.display();
    pendulum.display();
    string.display();

    if(keyCode === 32){
        pendulum.body.position.x = mouseX;
        pendulum.body.position.y = mouseY;
    }
    else if(keyCode === ENTER){
        pendulum.body.position.x = 400;
    }
}
