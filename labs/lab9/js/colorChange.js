// bring in divs together
let colorBoxes = document.querySelectorAll(".colors");

// set divs on click
for (let i = 0; i < colorBoxes.length; i++) {
    // set initial colors to grey
    colorBoxes[i].style.backgroundColor = "#aaaaaa";
  colorBoxes[i].addEventListener("click", function () {
    
    // console.log("clicked");

    // change color based on data attribute
    if (colorBoxes[i].dataset.change == "red") {
      colorBoxes[0].style.backgroundColor = "#aa5a5a";
    } else if (colorBoxes[i].dataset.change == "green") {
      colorBoxes[1].style.backgroundColor = "#aaf59a";
    } else if (colorBoxes[i].dataset.change == "blue") {
      colorBoxes[2].style.backgroundColor = "#3aaaaa";
    }
  });
}
