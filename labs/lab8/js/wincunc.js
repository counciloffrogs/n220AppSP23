// bring in div, button
let resultbox = document.getElementById("return");
let checkbutt = document.getElementById("check");

// on button click
checkbutt.onclick = function(){
    // get input value
    let avglist = document.getElementById("funcwinner").value;
    // split input into array
    const newArray = avglist.split(", ");
    // change inner html of div to result of running function
    resultbox.innerHTML = checkwin(newArray);
}

// function define, takes array
let checkwin = function(bopArray){
    // define count variable
    let count = 0;
    // define winner variable
    let winner = false;
    // iterate through input
    for(let i = 0; i < bopArray.length; i++){
        // if its a 1
        if (bopArray[i] == '1'){
            // add one to the count
            count++;
        // else
        } else{
            // reset count to 0
            count = 0;
        }
        // if count =3
        if(count == 3){
            // return true
            return true;
        }
    }
    // return false
    return false;
}