// when disc placed in square, set id = square numer 

// check all surrounding squares for the same colour

var currentPlayer = "Red"; // selects current player
var win = "Congratulations " + currentPlayer + " you've won!";
var lose = "Sorry " + currentPlayer + ", better luck next time.";
var score = [];
var board = [
    [{id: 1, filled: null}, {id: 8, filled: null}, {id: 15, filled: null}, {id: 22, filled: null}, {id: 29, filled: null}, {id: 36, filled: null}], // col 0
    [{id: 2, filled: "blue"}, {id: 9, filled: null}, {id: 16, filled: null}, {id: 23, filled: null}, {id: 30, filled: null}, {id: 37, filled: null}], // col 1
    [{id: 3, filled: "Red"}, {id: 10, filled: "Red"}, {id: 17, filled: "Red"}, {id: 24, filled: null}, {id: 31, filled: null}, {id: 38, filled: null}], // col 2
    [{id: 4, filled: "Red"}, {id: 11, filled: null}, {id: 18, filled: null}, {id: 25, filled: null}, {id: 32, filled: null}, {id: 39, filled: null}], // col 3
    [{id: 5, filled: "Red"}, {id: 12, filled: null}, {id: 19, filled: null}, {id: 26, filled: null}, {id: 33, filled: null}, {id: 40, filled: null}], // col 4
    [{id: 6, filled: "blue"}, {id: 13, filled: null}, {id: 20, filled: null}, {id: 27, filled: null}, {id: 34, filled: null}, {id: 41, filled: null}], // col 5
    [{id: 7, filled: null}, {id: 14, filled: null}, {id: 21, filled: null}, {id: 28, filled: null}, {id: 35, filled: null}, {id: 42, filled: null}] // col 6
];
var directions = [
    [[-1,-2,-3], [1,2,3]], // check R to L -x & check R to L +x
    [[-7,-14,-21], [7,14,21]],// check Near to Far -y & // check Near to Far +y
    [[6,12,18], [-6,-12,-18]], // check Near to Far diagonal -x+y & // check Near to Far diagonal -xy
    [[8,16,24], [-8,-16,-24]] // check Near to Far diagonal +xy & // check Near to Far diagon +x-y
];

// var directionArray = Object.getOwnPropertyNames(direction);

function dropColumn(column) {
    var column = board[column];
    // need to throw error if column is full already
    for (i = 0; i < column.length; i++){
        console.log(i);
        if (column[i].filled === null) {
            column[i].filled = currentPlayer;
            id = column[i].id;
            console.log("Disc dropped into #" + id);
            directions.forEach(direction => checkForWin(direction, id));
            console.log(id);
            return;
        } 
    } return;
}

function dropDisc(id) {
    board.find(x => x.id === id).filled = currentPlayer; // assigns disc to board
    directions.forEach(direction => checkForWin(direction, id)); // checks for matching discs using directions array
}

function checkForWin(direction, id) {
    score = [];
    try {
        direction.forEach(function(path) {
            
        })
            for (i = 0; i < 3; i++) { // iterate through second levels of arrays
                console.log(i);
                board.forEach(function(col) {
                    if (col.find(x => x.id === id + direction[a][i]).filled == currentPlayer) {
                        score.push(1);
                        console.log(score + " " + id + " " + direction[a]);
                    } else {
                        i = 3;
                    }
                });
            }
        }  checkScore(score);
    } catch(error) {

    }
}

function checkForWin(direction, id) {
    score = [];
    try {
        for (a = 0; a < 2; a++) { // iterate through first level arrays in directions, directions are grouped either side of the id
            console.log(a);
            for (i = 0; i < 3; i++) { // iterate through second levels of arrays
                console.log(i);
                board.forEach(function(col) {
                    if (col.find(x => x.id === id + direction[a][i]).filled == currentPlayer) {
                        score.push(1);
                        console.log(score + " " + id + " " + direction[a]);
                    } else {
                        i = 3;
                    }
                });
            }
        }  checkScore(score);
    } catch(error) {

    }
}



function checkScore(score) {

    if (score.length >= 3) {
        console.log(win);
        clearScores();
        return;
    } console.log("Next players turn");
    clearScores();
}

function clearScores() {
    score = [];
    cut = [];
}


// if same colour is in a corresponding square, use it's position to check if another of the same colour is in the opposite square







function resetBoard() {
    board = [
        [{id: 1, filled: null}, {id: 8, filled: null}, {id: 15, filled: null}, {id: 22, filled: null}, {id: 29, filled: null}, {id: 36, filled: null}], // col 0
        [{id: 2, filled: null}, {id: 9, filled: null}, {id: 16, filled: null}, {id: 23, filled: null}, {id: 30, filled: null}, {id: 37, filled: null}], // col 1
        [{id: 3, filled: null}, {id: 10, filled: null}, {id: 17, filled: null}, {id: 24, filled: null}, {id: 31, filled: null}, {id: 38, filled: null}], // col 2
        [{id: 4, filled: null}, {id: 11, filled: null}, {id: 18, filled: null}, {id: 25, filled: null}, {id: 32, filled: null}, {id: 39, filled: null}], // col 3
        [{id: 5, filled: null}, {id: 12, filled: null}, {id: 19, filled: null}, {id: 26, filled: null}, {id: 33, filled: null}, {id: 40, filled: null}], // col 4
        [{id: 6, filled: null}, {id: 13, filled: null}, {id: 20, filled: null}, {id: 27, filled: null}, {id: 34, filled: null}, {id: 41, filled: null}], // col 5
        [{id: 7, filled: null}, {id: 14, filled: null}, {id: 21, filled: null}, {id: 28, filled: null}, {id: 35, filled: null}, {id: 42, filled: null}] // col 6
        ];
    var column = null;
}


// using id # can access the property 'filled'
board.find(x => x.id == /*whatever id i want */).filled = /* what i want to update it to*/;

// scrapped, think i've got it sorted with way fewer lines

/*function checkingFirst(direction, id) {
    try {
        console.log(id + " " + direction);
        if (board.find(x => x.id === id + direction[0]).filled == currentPlayer) {
            score.push(1);
            console.log("1 if");
            if (board.find(x => x.id === id + direction[1]).filled == currentPlayer) {
                score.push(1);
                console.log("2 if");
                if (board.find(x => x.id === id + direction[2]).filled == currentPlayer) {
                    score.push(1);
                    console.log("3 if");
                }  
            }
        } checkingSecond(direction, id, score);
    } catch(error) {
        console.log(error);
    }
}
// currently only running through one iteration of second fuction, the fourth in the array
function checkingSecond(direction, id, score) {
    try {
        console.log(id + " 2 " + direction)
        if (board.find(x => x.id === id + direction[3]).filled == currentPlayer) {
            score.push(1);
            console.log("4 if");
            if (board.find(x => x.id === id + direction[4]).filled == currentPlayer) {
                score.push(1);
                console.log("5 if");
                if (board.find(x => x.id === id + direction[5]).filled == currentPlayer) {
                    score.push(1);
                    console.log("6 if");
                }
            }
        } checkScore(score);
    } catch(error) {
        console.log(error);
    }
}*/

/*var board
board = [
    {id: 1, filled: null},    {id: 2, filled: "blue"},    {id: 3, filled: "Red"},    {id: 4, filled: "Red"},    {id: 5, filled: "Red"},    {id: 6, filled: "blue"},    {id: 7, filled: null},
    {id: 8, filled: null},    {id: 9, filled: null},    {id: 10, filled: "Red"},    {id: 11, filled: null},    {id: 12, filled: null},    {id: 13, filled: null},    {id: 14, filled: null},
    {id: 15, filled: null},    {id: 16, filled: null},    {id: 17, filled: "Red"},    {id: 18, filled: null},    {id: 19, filled: null},    {id: 20, filled: null},    {id: 21, filled: null},
    {id: 22, filled: null},    {id: 23, filled: null},    {id: 24, filled: null},    {id: 25, filled: null},    {id: 26, filled: null},    {id: 27, filled: null},    {id: 28, filled: null},
    {id: 29, filled: null},    {id: 30, filled: null},    {id: 31, filled: null},    {id: 32, filled: null},    {id: 33, filled: null},    {id: 34, filled: null},    {id: 35, filled: null},
    {id: 36, filled: null},    {id: 37, filled: null},    {id: 38, filled: null},    {id: 39, filled: null},    {id: 40, filled: null},    {id: 41, filled: null},    {id: 42, filled: null}
]*/