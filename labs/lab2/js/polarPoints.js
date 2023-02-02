//create function
function polarPoint(r){
//define x using sin
    x = r * Math.sin(mouseX);

//define y using cos
    y = r * Math.cos(mouseX);

//return createVector
    return createVector(x,y); 

}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

}


function draw(){
//test in draw
    res = polarPoint();
    translate(100, 100);
    circle(res.x, res.y, 10);


}