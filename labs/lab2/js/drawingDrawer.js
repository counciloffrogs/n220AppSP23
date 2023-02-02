//define function cat
function cat(centerX, centerY){
        //set angles to degrees
        angleMode(DEGREES);
    
        //making head shape from smaller shapes
        stroke(87, 19, 39);
        fill(255, 194, 212);
        ellipse(centerX, centerY, 400, 300);
        //used an online graphing tool to get the third set of triangle coordinates
        triangle(centerX - 200, centerY, centerX - 200, centerY - 250, centerX - 65, centerY - 141);
        triangle(centerX + 200, centerY, centerX + 200, centerY - 250, centerX + 65, centerY - 141);
    
        //making nose
        fill(255, 117, 202);
        triangle(centerX, centerY - 20, centerX - 20, centerY + 20, centerX + 20, centerY + 20);
    
        //making mouth lines
        strokeWeight(3);
        noFill();
        line(centerX, centerY + 20, centerX, centerY + 60);
        //used unit circle and 30/60/90 triangle math to get the following measurements
        arc(centerX - 52, centerY + 30, 120, 120, 30, 150);
        arc(centerX + 52, centerY + 30, 120, 120, 30, 150);
    
        //making whisker lines, eyeballed measurements
        line(centerX - 150, centerY, centerX - 300, centerY - 10);
        line(centerX - 170, centerY + 30, centerX - 250, centerY + 30);
        line(centerX + 150, centerY, centerX + 300, centerY - 10);
        line(centerX + 170, centerY + 30, centerX + 250, centerY + 30);
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

}


function draw(){
//define x and y of cat center at mouseX, mouseY
    centerX = mouseX;
    centerY = mouseY;

//run function in draw
    cat(centerX, centerY);

}