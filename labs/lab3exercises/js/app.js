let bike = {
    age: 2,
    wear: 3
}

function makeBad(bike){
    bike.age += 1;
    bike.wear += 10;
    if (bike.age >= 5){
        bike.wear = 100;
    }
}

for(times = 0; times < 10; times++){
    makeBad(bike);
    console.log(bike);
}