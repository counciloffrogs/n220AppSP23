// get button and div
let butt = document.getElementById("clean");
let space = document.getElementById("return");

// function at button click
butt.onclick = function(){
    // get content of input
    let inp = document.getElementById("stringbox").value;
// replace # with nothing
    inp = inp.replaceAll('#', '');

// update div
    space.innerHTML = inp;
}