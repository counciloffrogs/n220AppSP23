// bring in div with get id
let big = document.getElementById("bigloop");

console.log(big.innerHTML);


// create a for loop with i starting a 1000, adding 1000, until more than 5000

for(let i = 1000; i <= 5000; i += 1000){
    // edit innerhtml to add a break and current i
    // note: may need to make i a string, will look up how
    big.innerHTML = big.innerHTML + "<br>" + i.toString();
    
}