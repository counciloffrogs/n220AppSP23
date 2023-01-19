r = 10

function setup(){
    createCanvas(1000, 1000);
    console.log(r);
}

function draw(){

    circle(mouseX, mouseY, r);

    // increase size by pressing
    if(mouseIsPressed) {
        r += 1;
    }

    // cap at 50px by resetting to 50
    if(r > 50){
        r = 50
    }
    console.log(r);

}