// get divs
let brick1 = document.getElementById("box1");
let brick2 = document.getElementById("box2");
let brick3 = document.getElementById("box3");

// set width height and color of all 3 divs
brick1.style.width = "200px";
brick1.style.height = "200px";
brick1.style.backgroundColor = "#FF3838";
brick2.style.width = "200px";
brick2.style.height = "200px";
brick2.style.backgroundColor = "#FF3838";
brick3.style.width = "200px";
brick3.style.height = "200px";
brick3.style.backgroundColor = "#FF3838";

// function to change styling
let styleChange = function(box){
// reset width and color
    box.style.width = "100px";
    box.style.backgroundColor = "#386CFF";
}

// function on click first div
brick1.onclick = function(){
    // invoke change style
    styleChange(brick1);
}
// function on click second div
brick2.onclick = function(){
    // invoke change style
    styleChange(brick2);
}

// function on click third div
brick3.onclick = function(){
    // invoke change style
    styleChange(brick3);
}