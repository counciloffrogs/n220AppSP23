//create rectangle object 1, with x, y, width, height on the left side
let rect1 = {
    x: 20,
    y: 300,
    width: 10,
    height: 100
}

//create rectange object 2, with same width, height, y, right side x
let rect2 = {
    x: 1000,
    y: 300,
    width: 10,
    height: 100
}

function setup(){
    createCanvas(1200, 700);

}


function draw(){
    //draw both rectangle objects
    rect(rect1.x, rect1.y, rect1.width, rect1.height);
    rect(rect2.x, rect2.y, rect2.width, rect2.height);

    //check if up arrow is pressed
    if (keyIsDown(UP_ARROW)) {
        //if so, make first object y decrease
        rect1.y--;

        //second object y increase
        rect2.y++;
      }

    //check if down arrow is pressed
    if (keyIsDown(DOWN_ARROW)) {

        //if so, make first object y increase
        rect1.y++;

        //second object y decrease
        rect2.y--;
    }

}