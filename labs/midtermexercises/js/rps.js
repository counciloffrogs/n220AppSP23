// bring in all 4 divs and score div
r = document.getElementById("rock");
p = document.getElementById("paper");
s = document.getElementById("scissors");
g = document.getElementById("guard");
result = document.getElementById("resultBox");


score = 0;
you = ""
comp = ""

// change result div text to reflect score and results as a function
boxupdate = function(){result.innerHTML = "Score: " + score + "<br>Last Round:<br> You Chose: " + you + "<br>Computer Chose: " + comp;}

// onclick div guard
g.onclick = function(){
    // subtract half a point from score
    score -= .5;
    num = Math.floor(Math.random() * 4);
    you = "guard";
    if(num == 0){
        comp = "rock"
    } else if (num == 1){
        comp = "paper"
    } else if (num == 2){
        comp = "scissors"
    } else{
        comp = "guard"
    }
    boxupdate();
}

// onclick div rock
r.onclick = function(){
    // generate random 1-4
    num = Math.floor(Math.random() * 4);
    // if computer scissors, add one to score
    if(num == 2){
        score += 1;
    } else if(num == 1){
        // else if computer paper, subtract one
        score -= 1;
    }
    you = "rock";
    if(num == 0){
        comp = "rock"
    } else if (num == 1){
        comp = "paper"
    } else if (num == 2){
        comp = "scissors"
    } else{
        comp = "guard"
    }
    boxupdate();
}

// onclick div paper
p.onclick = function(){
    // generate random 1-4
    num = Math.floor(Math.random() * 4);
    // if computer rock, add one to score
    if(num == 0){
        score += 1;
    } else if(num == 2){
        // else if computer scissors, subtract one
        score -= 1;
    }
    you = "paper";
    if(num == 0){
        comp = "rock"
    } else if (num == 1){
        comp = "paper"
    } else if (num == 2){
        comp = "scissors"
    } else{
        comp = "guard"
    }
    boxupdate();
}

// onclick div scissors
s.onclick = function(){
    // generate random 1-4
    num = Math.floor(Math.random() * 4);
    // if computer paper, add one to score
    if (num == 1){
        score += 1;
    } else if (num == 0){
        // else if computer rock, subtract one
        score -= 1;
    }
    you = "scissors";
    if(num == 0){
        comp = "rock"
    } else if (num == 1){
        comp = "paper"
    } else if (num == 2){
        comp = "scissors"
    } else{
        comp = "guard"
    }
    boxupdate();
}
