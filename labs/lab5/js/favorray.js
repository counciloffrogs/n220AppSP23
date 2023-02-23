// bring in div with getid

favorray = document.getElementById("fav");


// create array of 5 cool things

const coolThings = ["skating", "cake", "archery", "painting", "the zoo"];


// for loop with i equal to 0, adding 1, up to length of array

for(let i = 0; i < coolThings.length; i++){
    // edit innerhtml to add break and element at i and , is one of my favorite things
    favorray.innerHTML = favorray.innerHTML + coolThings[i] + ", is one of my favorite things" + "<br>";

}