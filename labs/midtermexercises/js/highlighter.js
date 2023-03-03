// bring in all 7 divs individually
disbox = document.getElementById("display");
cheezIt = document.getElementById("cheez");
buzz = document.getElementById("bee");
dyno = document.getElementById("dino");
wat = document.getElementById("water");
die = document.getElementById("dice");
light = document.getElementById("lamp");

// set all 6 div background color
disbox.style.backgroundColor = "#aaaaff";
cheezIt.style.backgroundColor = "#aaffaa";
buzz.style.backgroundColor = "#aaffaa";
dyno.style.backgroundColor = "#aaffaa";
wat.style.backgroundColor = "#aaffaa";
die.style.backgroundColor = "#aaffaa";
light.style.backgroundColor = "#aaffaa";

// function onclick with div 1
cheezIt.onclick = function(){
    // set all 6 divs to non-bold and base color
    buzz.style.fontWeight = "normal";
    dyno.style.fontWeight = "normal";
    wat.style.fontWeight = "normal";
    die.style.fontWeight = "normal";
    light.style.fontWeight = "normal";
    buzz.style.backgroundColor = "#aaffaa";
    dyno.style.backgroundColor = "#aaffaa";
    wat.style.backgroundColor = "#aaffaa";
    die.style.backgroundColor = "#aaffaa";
    light.style.backgroundColor = "#aaffaa";
    
    // set make the clicked div bold and highlight color
    cheezIt.style.fontWeight = "bolder";
    cheezIt.style.backgroundColor = "#ffaaaa";

    // bring inner html to top div
    disbox.innerHTML = cheezIt.innerHTML;
}

// function onclick with div 2
buzz.onclick = function(){
    // set all 6 divs to non-bold and base color
    cheezIt.style.fontWeight = "normal";
    dyno.style.fontWeight = "normal";
    wat.style.fontWeight = "normal";
    die.style.fontWeight = "normal";
    light.style.fontWeight = "normal";
    cheezIt.style.backgroundColor = "#aaffaa";
    dyno.style.backgroundColor = "#aaffaa";
    wat.style.backgroundColor = "#aaffaa";
    die.style.backgroundColor = "#aaffaa";
    light.style.backgroundColor = "#aaffaa";
    
    // set make the clicked div bold and highlight color
    buzz.style.fontWeight = "bolder";
    buzz.style.backgroundColor = "#ffaaaa";

    // bring inner html to top div
    disbox.innerHTML = buzz.innerHTML;
}

// function onclick with div 3
dyno.onclick = function(){
    // set all 6 divs to non-bold and base color
    buzz.style.fontWeight = "normal";
    cheezIt.style.fontWeight = "normal";
    wat.style.fontWeight = "normal";
    die.style.fontWeight = "normal";
    light.style.fontWeight = "normal";
    buzz.style.backgroundColor = "#aaffaa";
    cheezIt.style.backgroundColor = "#aaffaa";
    wat.style.backgroundColor = "#aaffaa";
    die.style.backgroundColor = "#aaffaa";
    light.style.backgroundColor = "#aaffaa";
    
    // set make the clicked div bold and highlight color
    dyno.style.fontWeight = "bolder";
    dyno.style.backgroundColor = "#ffaaaa";

    // bring inner html to top div
    disbox.innerHTML = dyno.innerHTML;
}

// function onclick with div 4
wat.onclick = function(){
    // set all 6 divs to non-bold and base color
    buzz.style.fontWeight = "normal";
    dyno.style.fontWeight = "normal";
    cheezIt.style.fontWeight = "normal";
    die.style.fontWeight = "normal";
    light.style.fontWeight = "normal";
    buzz.style.backgroundColor = "#aaffaa";
    dyno.style.backgroundColor = "#aaffaa";
    cheezIt.style.backgroundColor = "#aaffaa";
    die.style.backgroundColor = "#aaffaa";
    light.style.backgroundColor = "#aaffaa";
    
    // set make the clicked div bold and highlight color
    wat.style.fontWeight = "bolder";
    wat.style.backgroundColor = "#ffaaaa";

    // bring inner html to top div
    disbox.innerHTML = wat.innerHTML;
}

// function onclick with div 5
die.onclick = function(){
    // set all 6 divs to non-bold and base color
    buzz.style.fontWeight = "normal";
    dyno.style.fontWeight = "normal";
    wat.style.fontWeight = "normal";
    cheezIt.style.fontWeight = "normal";
    light.style.fontWeight = "normal";
    buzz.style.backgroundColor = "#aaffaa";
    dyno.style.backgroundColor = "#aaffaa";
    wat.style.backgroundColor = "#aaffaa";
    cheezIt.style.backgroundColor = "#aaffaa";
    light.style.backgroundColor = "#aaffaa";
    
    // set make the clicked div bold and highlight color
    die.style.fontWeight = "bolder";
    die.style.backgroundColor = "#ffaaaa";

    // bring inner html to top div
    disbox.innerHTML = die.innerHTML;
}

// function onclick with div 6
light.onclick = function(){
    // set all 6 divs to non-bold and base color
    buzz.style.fontWeight = "normal";
    dyno.style.fontWeight = "normal";
    wat.style.fontWeight = "normal";
    die.style.fontWeight = "normal";
    cheezIt.style.fontWeight = "normal";
    buzz.style.backgroundColor = "#aaffaa";
    dyno.style.backgroundColor = "#aaffaa";
    wat.style.backgroundColor = "#aaffaa";
    die.style.backgroundColor = "#aaffaa";
    cheezIt.style.backgroundColor = "#aaffaa";
    
    // set make the clicked div bold and highlight color
    light.style.fontWeight = "bolder";
    light.style.backgroundColor = "#ffaaaa";

    // bring inner html to top div
    disbox.innerHTML = light.innerHTML;
}