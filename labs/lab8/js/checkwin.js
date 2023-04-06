// bring in div, button
let resultbox = document.getElementById("return");
let checkbutt = document.getElementById("check");

// on button click, function
checkbutt.onclick = function(){
    // get input value
    let avglist = document.getElementById("winner").value;
    // split input into array
    const newArray = avglist.split(", ");
    // define count variable
    let count = 0;
    // define winner variable
    let winner = false;
    // iterate through input
    for(let i = 0; i < newArray.length; i++){
        // if its a 1
        if (newArray[i] == '1'){
            // add one to the count
            count++;
        // else
        } else{
            // reset count to 0
            count = 0;
        }
        // if count =3
        if(count == 3){
            // set winner to true
            winner = true;
        }
        // console.log(count, winner);
    }
    // if winner is true
    if (winner == true){
        // update div to say winner
        resultbox.innerHTML = "winner";
    // else
    }else{
        // update to say not winner
        resultbox.innerHTML = "not winner";
    }
}