// get elementId
let squareDiv = document.getElementById("overout");

// set background to blue
squareDiv.style.backgroundColor = "#0000FF";

// on mouseover, change color to black
squareDiv.onmouseover = function(){
    squareDiv.style.backgroundColor = "#000";

}

//on mouseoff, chane color to blue
squareDiv.onmouseout = function(){
    squareDiv.style.backgroundColor = "#0000FF";

}