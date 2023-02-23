// bring in div with getid

let bop = document.getElementById("beep");


// make a for loop starting at 0 adding 1 and ending at 24

for(let i = 0; i < 25; i++){

// check with if for divisible by 3 and 5 (remainder 0)
    if((i % 3 == 0) && (i % 5 == 0)){
        // add a break and beepbop to innerhtml
        bop.innerHTML = bop.innerHTML + "beepbop" + "<br>";

        // elif for divisible by 3 (remainder 0)
    } else if(i % 3 == 0){
        // add a break and beep
        bop.innerHTML = bop.innerHTML + "beep" + "<br>";

        // elif for divisible by 5 (remainder 0)
    } else if(i % 5 == 0){
        // add a break and bop
        bop.innerHTML = bop.innerHTML + "bop" + "<br>";

        // else add a break and i
        // note: may need to make number a string, will look up how
    } else {
        bop.innerHTML = bop.innerHTML + i.toString() + "<br>";
    }
}