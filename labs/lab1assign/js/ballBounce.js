// set starting coordinates and speeds
x = 0
y = 0
xSpeed = 5
ySpeed = 5

function setup(){
    createCanvas(800, 600);
    background(0);

}

function draw(){
    // check to see if ball is in x bounds
    if ((x < 0) || (x > width)) {    
        //reverse direction
        xSpeed = xSpeed * -1;
    }

    // check to see if ball is in y bounds
    if ((y < 0) || (y > height)) {    
        //reverse direction
        ySpeed = ySpeed * -1;
    }

    // update x and y
    x += xSpeed
    y += ySpeed

    // draw circle
    circle(x, y, 10);

    // clear background
    background(0);

    // troubleshooting
    // console.log(x);
    // console.log(y);
    // console.log(xSpeed);
    // console.log(ySpeed);
}