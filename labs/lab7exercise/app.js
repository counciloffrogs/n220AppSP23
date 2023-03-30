box = document.getElementById("valid");
checkbutt = document.getElementById("check");

checkbutt.onclick = function(){
    vowel = document.getElementById("getin").value;
    console.log(vowel);
    if(vowel == "a" || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u'){
        box.innerHTML = "True";
    }else{
        box.innerHTML = "False";
    }
}