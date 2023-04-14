let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let horizontalcheck = function(array){
    for(let i = 0; i < board.length; i++){
        let row = array.filter(function(array){
            return array[i] == 'X';
        })
        if(row.length == i.length){
            console.log('X wins');
        }
        row = array.filter(function(array){
            return array[i] == 'O';
        })
        if(row.length == i.length){
            console.log('O wins');
        }
    }
}

let verticalcheck = function(array){
    
}