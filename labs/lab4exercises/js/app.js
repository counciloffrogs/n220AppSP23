let content1 = ""
let content2 = ""
function checkResponse(time){
    if (time == "4:38pm"){
        content1 = "That is correct"
    } 
    else{
        content2 = "Guess again"
    }
}

checkResponse("4:27pm")