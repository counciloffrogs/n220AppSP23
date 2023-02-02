//define object
let box = {
    //define height, width, x, y, color
    height: 100,
    width: 200,
    x: 300,
    y: 400
}

//define function with one argument
function makeBox(thing){
    //run fill color
    fill(thing.color);
    
    //take object and draw to screen
    rect(thing.x, thing.y, thing.width, thing.height);
    
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    //set objext color
    box.color = color(100, 150, 200);

}

function draw(){
    //run function
    makeBox(box);
    
}