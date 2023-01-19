// create diameter global var
d = 1;

function setup(){
    createCanvas(windowWidth, windowHeight);

}

function draw(){
    // increase diameter by 1
    d++;

    // check if diameter is bigger than 200, reset
    if (d >= 200){
        d = 1;
        background(255);

    }

    // draw circle
    circle(width / 2, height / 2, d);

}