// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]


const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you

function evaluatePlay(grid){

//In a two dimensional array, the first [] 
//represents the row position and the second
//[] represents the column position.

//Writing an if statement for grid rowWin 'O' 
//positions:
    if ((grid[0][0]==grid[0][1])&&(grid[0][0]==grid[0][2])){
        console.log("O wins, X loses");

//Following if statement, is for grid 
//colWin 'X' positions.
  
    }else if ((grid[0][1]==grid[1][1])&&(grid[0][1]==grid[2][1])){       
        console.log("X wins, O loses");

//Following if statement, is for grid 
//diagonalWin 'O' positions:

    }else if ((grid[0][2]==grid[1][1])&&(grid[0][2]==grid[2][0])){       
        console.log("O wins, X loses");

//Following if statement, is for grid 
//diagonalWinInverse 'X' positions:

    }else if ((grid[0][0]==grid[1][1])&&(grid[0][0]==grid[2][2])){     
        console.log("X wins, O loses");
    } 
} 
  
     evaluatePlay(rowWin);  
     evaluatePlay(colWin);  
     evaluatePlay(diagonalWin); 
     evaluatePlay(diagonalWinInverse);   
    
       
    // ------------------------------- Have -------------------------------------------

    // ------------------------------- Fun  -------------------------------------------
   

/*
Determines if the last move resulted in 
a win for either player.
board: is an array representing the board.
lastMove: is the boardIndex of the last 
(most recent) move.

These are the boardIndexes:
 
    0 | 1 | 2
   ---+---+---
    3 | 4 | 5
   ---+---+---
    6 | 7 | 8
  
returns true if there was a win.
Pseudocode for rowWin:
if((pos[0]!=empty)&&(pos[0]==pos[1]&&(pos[1]==pos[2])));
        return true.
else false

*/
/*
let winLines = [
    [[1, 2], [4, 8], [3, 6]],
    [[0, 2], [4, 7]],
    [[0, 1], [4, 6], [5, 8]],
    [[4, 5], [0, 6]],
    [[3, 5], [0, 8], [2, 6], [1, 7]],
    [[3, 4], [2, 8]],
    [[7, 8], [2, 4], [0, 3]],
    [[6, 8], [1, 4]],
    [[6, 7], [0, 4], [2, 5]]
];

function evaluatePlay(grid) {
    let player = board[lastMove];
    for (var i = 0; i < winLines[lastMove].length; i++) {
        var line = winLines[lastMove][i];
        if(player === board[line[0]] && player === board[line[1]]) {
            return true;
        }
    }
    return false;
}



/*

        const checkIfWin = (b) => {
            if (b[0][0] == b[0][1] && b[0][1] == b[0][2]) return b[0][0]
            if (b[1][0] == b[1][1] && b[1][2] == b[1][1]) return b[1][0]
            if (b[2][0] == b[2][1] && b[2][1] == b[2][2]) return b[2][2]
            if (b[0][0] == b[1][0] && b[1][0] == b[2][0]) return b[2][0]
            if (b[0][1] == b[1][1] && b[1][1] == b[2][1]) return b[2][1]
            if (b[0][2] == b[1][2] && b[1][2] == b[2][2]) return b[2][2]
            if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) return b[2][2]
            if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) return b[2][0]
          }
        
        checkIfWin([ [ 1, 0, 0 ], [ 0, 1, 0 ], [ -1, -1, 1 ] ]) // 1
        

}
*/

/*
Choosing a more useful representation

First, we need a board notation, just so that we can discuss this. So, similar to Chess, lets number the rows with letters and the columns with numbers - so we know which square we're talking about

    1	2	3
A	a1	a2	a3
B	b1	b2	b3
C	c1	c2	c3
Each given a binary value:

a1 = 100 000 000 100 000 000 100 000 ; Row A Col 1 (top left corner)
a2 = 010 000 000 000 100 000 000 000 ; Row A Col 2 (top edge)
a3 = 001 000 000 000 000 100 000 100 ; Row A Col 3 (top right corner)
b1 = 000 100 000 010 000 000 000 000 ; Row B Col 1 (left edge)
b2 = 000 010 000 000 010 000 010 010 ; Row B Col 2 (middle square)
b3 = 000 001 000 000 000 010 000 000 ; Row B Col 4 (right edge)
c1 = 000 000 100 001 000 000 000 001 ; Row C Col 1 (bottom left corner)
c2 = 000 000 010 000 001 000 000 000 ; Row C Col 2 (bottom edge)
c3 = 000 000 001 000 000 001 001 000 ; Row C Col 3 (bottom right corner)
... where, the binary values encode which rows, columns and diagonals the position appears in. (we'll look at how this works this later)

We will use these values to build two representations of the game, one for X and one for O

X starts with an empty board : 000 000 000 000 000 000 000 000
O starts with an empty board : 000 000 000 000 000 000 000 000
Let's follow X's moves (O would be the same principle)

X plays A1... so we OR (the X board) with value A1
X plays A2... so we OR with value A2
X plays A3... so we OR with value A3


//Checking for a win:

function init(selector) {
	let cells = document.querySelectorAll('#field td');
	let i = 0;
	
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			this.textContent = ['X', 'O'][i % 2];
			this.removeEventListener('click', step);
			
			// here we have to check for win or draw
			
			i++;
		});
	}
}
//Let's make the isVictory function that accepts an array of cells as a parameter and returns true if there is a victory on the field, and false if not. We will use this function as follows:

function start(cells) {
	let i = 0;
	
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			this.textContent = ['X', 'O'][i % 2];
			this.removeEventListener('click', step);
			
			if (isVictory(cells)) {
				alert('winner name');
			}
			
			i++;
		});
	}
}


//Winner name:

function start(cells) {
	let i = 0;
	
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			this.textContent = ['X', 'O'][i % 2];
			this.removeEventListener('click', step);
			
			if (isVictory(cells)) {
				alert(this.textContent); // displays the winner name  
			}
			
			i++;
		});
	}
}
*/