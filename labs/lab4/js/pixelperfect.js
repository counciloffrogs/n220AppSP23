// on click, set width and height to *1.1
let pixel2 = document.getElementById("pixel");

let pixelW = 100;
let pixelH = 100;

pixel2.style.width = pixelW + "px";
pixel2.style.height = pixelH + "px";

pixel2.onclick = function(){
    pixelW *= 1.1;
    pixelH *= 1.1;

    pixel2.style.width = pixelW + "px";
    pixel2.style.height = pixelH + "px";
}
