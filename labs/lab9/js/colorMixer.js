// bring in top 2 divs
let colorBox = document.getElementById("colorsample");
let textBox = document.getElementById("text");

// bring all button divs with queryselectorall
let addBoxes = document.querySelectorAll("#buttons");

// set red green blue variables to 0
let red = 0;
let blue = 0;
let green = 0;
// set top 2 divs html and color
textBox.innerHTML = "Current Color: RGB(" + red + ", " + green + ", " + blue + ")";
colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// onclick function for divs
for (let i = 0; i < addBoxes.length; i++) {
    addBoxes[i].addEventListener("click", function () {
// change variable, get data attributes for amount and color
        if (addBoxes[i].dataset.color == "red"){
            red += parseInt(addBoxes[i].dataset.value);
        } else if (addBoxes[i].dataset.color == "green"){
            green += parseInt(addBoxes[i].dataset.value);
        } else if (addBoxes[i].dataset.color == "blue"){
            blue += parseInt(addBoxes[i].dataset.value);
        }
// update html div and color div
        textBox.innerHTML = "Current Color: RGB(" + red + ", " + green + ", " + blue + ")";
        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
    }
    )
}