// bring in div, button
let resultbox = document.getElementById("return");
let checkbutt = document.getElementById("check");

// on button click, function
checkbutt.onclick = function(){
    // get input value
    let avglist = document.getElementById("justaverage").value;
    // split input into array
    const newArray = avglist.split(", ");
    // define sum variable
    let sum = 0;
    // iterate through array
    for(let i = 0; i < newArray.length; i++){
        // add to sum
        sum += Number.parseInt(newArray[i]);
    }
    // calculate average to new variable
    average = sum / newArray.length;
    // inner html of div to show average and sum
    resultbox.innerHTML = "Average = " + average + "<br> Sum = " + sum;
    // set input value to ''
    document.getElementById("justaverage").value = '';
}