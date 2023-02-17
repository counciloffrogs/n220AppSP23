// get inner html

let existing = document.getElementById("mcdiv");


// on click, change text in have mc at the beginning

existing.onclick = function(){
    existing.innerHTML = "mc" + existing.innerHTML;
    
}