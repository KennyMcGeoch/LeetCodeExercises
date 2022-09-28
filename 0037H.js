/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {

    let verticalLines = [[],[],[],[],[],[],[],[],[]]
    let nineBoxes = [[],[],[],[],[],[],[],[],[]]
    let combinedArray = []
    let setVar
    let testArrayOne = []
    let testArrayTwo = []
    let testArrayThree = []
    let setString = ""
    let elementsSolve = board.flat().filter(x => x === ".").length
    let loopCounter = 0

    while (elementsSolve > 0){
        console.log(elementsSolve)
        loopCounter = 0
        for (i=0; i<9; i++){
            for (j=0; j<9; j++){
                verticalLines[i][j] = board[j][i]
            }
        }

        for (i=0; i<3; i++){
            for (j=0; j<9; j++){
                if (j<3){
                    nineBoxes[0][j + (3*i)] = board[i][j]
                }
                else if (j<6){
                    nineBoxes[1][j + (3*i) - 3] = board[i][j]
                }
                else {
                    nineBoxes[2][j + (3*i) - 6] = board[i][j]
                }
            }
        }

        for (i=3; i<6; i++){
            for (j=0; j<9; j++){
                if (j<3){
                    nineBoxes[3][j + (3*(i-3))] = board[i][j]
                }
                else if (j<6){
                    nineBoxes[4][j + (3*(i-3)) - 3] = board[i][j]
                }
                else {
                    nineBoxes[5][j + (3*(i-3)) - 6] = board[i][j]
                }
            }
        }

        for (i=6; i<9; i++){
            for (j=0; j<9; j++){
                if (j<3){
                    nineBoxes[6][j + (3*(i-6))] = board[i][j]
                }
                else if (j<6){
                    nineBoxes[7][j + (3*(i-6)) - 3] = board[i][j]
                }
                else {
                    nineBoxes[8][j + (3*(i-6)) - 6] = board[i][j]
                }
            }
        }

        for (i=0; i<9;i++){
            testArrayOne = board[i]
            for (j=0; j< 9; j++){
                if (board[i][j] === "."){
                    testArrayTwo = verticalLines[j]
                    testArrayThree = nineBoxes[parseInt(j/3) + (3 * parseInt(i/3))]
                    combinedArray = testArrayOne.concat(testArrayTwo,testArrayThree)
                    setVar = new Set (combinedArray);
                    if (setVar.size === 9){
                        for (k=1; k<10; k++){
                            setString = k.toString()
                            if (setVar.has(setString) === false){
                                board[i][j] = setString
                                elementsSolve--
                                loopCounter++
                            }
                        }
                    }
                }

            }
        }   
        if (loopCounter === 0) elementsSolve = 0 // stops endless loop
    }
    console.log(board)
};

solveSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])


// [[".",".","9","7","4","8",".",".","."], Test Case to resolve
//  ["7",".",".",".",".",".",".",".","."],
//  [".","2",".","1",".","9",".",".","."],
//  [".",".","7",".",".",".","2","4","."],
//  [".","6","4",".","1",".","5","9","."],
//  [".","9","8",".",".",".","3",".","."],
//  [".",".",".","8",".","3",".","2","."],
//  [".",".",".",".",".",".",".",".","6"],
//  [".",".",".","2","7","5","9",".","."]]

// [
//  ['.','.','9','7','4','8','.','.','.'], Where algorithm stalls
//  ['7','.','.','6','.','2','.','.','.'],
//  ['.','2','.','1','.','9','.','.','.'],
//  ['.','.','7','9','8','6','2','4','1'],
//  ['2','6','4','3','1','7','5','9','8'],
//  ['1','9','8','5','2','4','3','6','7'],
//  ['.','.','.','8','6','3','.','2','.'],
//  ['.','.','.','4','9','1','.','.','6'],
//  ['.','.','.','2','7','5','9','.','.']
// ]

// [["5","1","9","7","4","8","6","3","2"], Solution
//  ["7","8","3","6","5","2","4","1","9"],
//  ["4","2","6","1","3","9","8","7","5"],
//  ["3","5","7","9","8","6","2","4","1"],
//  ["2","6","4","3","1","7","5","9","8"],
//  ["1","9","8","5","2","4","3","6","7"],
//  ["9","7","5","8","6","3","1","2","4"],
//  ["8","3","2","4","9","1","7","5","6"],
//  ["6","4","1","2","7","5","9","8","3"]]