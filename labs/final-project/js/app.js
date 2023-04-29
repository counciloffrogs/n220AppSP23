// bring in necessary elements

// function "letterchange"
    // for i in array unguessed, make a button with same id and an attribute with the letter, fill text with letter and give width and height and background color
    // for i in array correct, add to html of div of correct
    // for i in array incorrect, add to html of div of incorrect

// function "endwin"
    // make bottom1 none and 2 block
    // make div html say win, background green
    // submit button onclick, run start

// function "endlose"
    // make bottom1 none and 2 block
    // make div html say lose, background red
    // submit button onclick, run start

// function "p5"
    // if p5 step == 1, draw circle
    // 2, draw body
    // 3, draw arm1
    // 4, draw arm2,
    // 5, draw arm3,
    // 6, draw arm4 and run endLose

// function "stringfix"
    // make string lowercase
    // for i in string
        // if i not a lowercase letter, remove

// function "play"
    // make player 1 none and 2 block
    // make bottom 1 block and 2 none
    // run letter change
        // function on click all that id
            // check variable
            // for i in wordh1
                // if i == attribute letter, change underscore to that letter
                // change check
            // if check is false
                // move that letter to incorrect
                // p5 step +1
                // run p5
                // update div to be red, say the last letter and incorrect
            // if check is true
                // move that letter to correct
                // if underscore in wordh1 ==false, then run end win
                // update div to be green, say last letter and correct
            // run letter change

// function "start"
    // create p5 canvas in div
    // draw gallows
    // variable for p5 step
    // clear input
    // set 3 arrays for guesses
    // make player1 block and 2 none
    // bring in stringfix of input word
    // for i in length input word, add an underscore to h1
    // run play

// run function start