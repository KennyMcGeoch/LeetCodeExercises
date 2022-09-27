/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime: 263 ms, faster than 5.02% of JavaScript online submissions for Valid Sudoku.
Memory Usage: 49.2 MB, less than 12.24% of JavaScript online submissions for Valid Sudoku.
 */
 var isValidSudoku = function(board) {

    let verticalLines = [[],[],[],[],[],[],[],[],[]]
    let nineBoxes = [[],[],[],[],[],[],[],[],[]]
    let duplicateCheck = 0

    if (checkArrays(board) === false){
        return false
    }

    for (i=0; i<9; i++){
        for (j=0; j<9; j++){
            verticalLines[i].push(board[j][i])
        }
    }

    if (checkArrays(verticalLines) === false){
        return false
    }

    for (i=0; i<3; i++){
        for (j=0; j<9; j++){
            if (j<3){
            nineBoxes[0].push(board[i][j])
            }
            else if (j<6){
                nineBoxes[1].push(board[i][j])
            }
            else {
                nineBoxes[2].push(board[i][j])
            }
        }
    }

    for (i=3; i<6; i++){
        for (j=0; j<9; j++){
            if (j<3){
            nineBoxes[3].push(board[i][j])
            }
            else if (j<6){
                nineBoxes[4].push(board[i][j])
            }
            else {
                nineBoxes[5].push(board[i][j])
            }
        }
    }

    for (i=6; i<9; i++){
        for (j=0; j<9; j++){
            if (j<3){
            nineBoxes[6].push(board[i][j])
            }
            else if (j<6){
                nineBoxes[7].push(board[i][j])
            }
            else {
                nineBoxes[8].push(board[i][j])
            }
        }
    }

    
    if (checkArrays(nineBoxes) === false){
        return false
    }

    function checkArrays(arrayTest){
        for (i=0; i<9; i++){
            duplicateCheck = arrayTest[i].filter(function (arr) {
                return arr !== "."}).length
                if (duplicateCheck < 9){
                    duplicateCheck++
                }
            if (duplicateCheck !== new Set(arrayTest[i]).size){
                    return false
              }
        }
        return true
    }
    return true    
};

isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])