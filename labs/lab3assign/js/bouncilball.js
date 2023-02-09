// create ball object with x, y, x and y speeds, size
let ball = {
    x: 0,
    y: 0,
    xVelocity: 5,
    yVelocity: 5,
    diameter: 10,
}

function setup(){
    createCanvas(800, 600);
    //set background color
    background(0);

    //add ball color
    ball.color = color(100, 120, 250);
}

function draw(){
    // check to see if ball is in x bounds
    if ((ball.x < 0) || (ball.x > width)) {    
        //reverse direction (x velocity) if not
        ball.xVelocity = ball.xVelocity * -1;
    }

    // check to see if ball is in y bounds
    if ((ball.y < 0) || (ball.y > height)) {    
        //reverse direction (y velocity) if not
        ball.yVelocity = ball.yVelocity * -1;
    }

    // update x and y
    ball.x += ball.xVelocity
    ball.y += ball.yVelocity

    //run fill with color
    fill(ball.color);

    // draw circle
    circle(ball.x, ball.y, ball.diameter);

}