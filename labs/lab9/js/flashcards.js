// bring in divs together
let cardBoxes = document.querySelectorAll(".cards");

for (let i = 0; i < cardBoxes.length; i++){
// set listener for divs on click 
    cardBoxes[i].addEventListener("click", function () {
    // change content based on data attribute
    cardBoxes[i].innerHTML = cardBoxes[i].dataset.change;
    }
    )
}