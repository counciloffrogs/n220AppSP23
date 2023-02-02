//define function to remove red
function removeRed(hasred){
    //remove red from variable
    console.log(hasred);

    hasred.setRed(0);

    //return color
    return hasred;
}

function setup(){
    createCanvas(500, 500);
    
}


function draw(){
    //draw circle in new color
    fill(removeRed(color(170, 200, 150)));
    circle(100, 100, 50);
}
