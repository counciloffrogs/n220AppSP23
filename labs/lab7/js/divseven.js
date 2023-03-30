//get button and div
let butt = document.getElementById("check");
let numbox = document.getElementById("return");

// function on button click
butt.onclick = function(){
    // get input value
    let inp = document.getElementById("numberbox").value;
    console.log(inp);
    console.log(parseInt(inp) % 7 == 0);

    // check input value is an integer
    if(isNaN(inp) == true){
        alert("Must input a number");
    } else{
        // if its divisible by 7 update div
        if(parseInt(inp) % 7 == 0){
            numbox.innerHTML = "True";
        }else{
            // else update div false
            numbox.innerHTML = "False";
    }
    }
}