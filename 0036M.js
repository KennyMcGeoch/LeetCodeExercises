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

/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime 10ms Beats 18.91%
 * Memory 59.49MB Beats 18.03%
 */
var isValidSudoku = function(board) {

    let verticalLines = [[],[],[],[],[],[],[],[],[]]
    let nineBoxes = [[],[],[],[],[],[],[],[],[]]
    let duplicateCheck = [0,0,0,0,0,0,0,0,0,0]

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
            duplicateCheck = [0,0,0,0,0,0,0,0,0,0]
            for (let j=0; j<9; j++){
                if (arrayTest[i][j] !== "."){
                    if (duplicateCheck[arrayTest[i][j]]++ === 1) return false
                }
            }
        }
        return true
    }
    return true    
};

/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime 3ms Beats 88.46%
 * Memory 60.15MB Beats 11.76%
 */
var isValidSudoku = function(board) {

    let nineBoxes = [[],[],[],[],[],[],[],[],[]]
    let duplicateCheck = [0,0,0,0,0,0,0,0,0,0]

    if (checkArrays(board) === false){
        return false
    }

    if (checkVert(board) === false){
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
            duplicateCheck = [0,0,0,0,0,0,0,0,0,0]
            for (let j=0; j<9; j++){
                if (arrayTest[i][j] !== "."){
                    if (duplicateCheck[arrayTest[i][j]]++ === 1) return false
                }
            }
        }
        return true
    }
    function checkVert(arrayTest){
        for (i=0; i<9; i++){
            duplicateCheck = [0,0,0,0,0,0,0,0,0,0]
            for (let j=0; j<9; j++){
                if (arrayTest[j][i] !== "."){
                    if (duplicateCheck[arrayTest[j][i]]++ === 1) return false
                }
            }
        }
        return true
    }

    return true    
};

/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime 4ms Beats 77.35%
 * Memory 55.86MB Beats 91.41%
 */
var isValidSudoku = function(board) {

    let duplicateCheck = [0,0,0,0,0,0,0,0,0,0]

    if (checkArrays() === false){
        return false
    }

    if (checkVert() === false){
        return false
    }

    for (let i=0; i<7; i +=3){
        for (let j=0; j<7; j += 3){
            if (checkBox(i,j) === false) return false
        }
    }

    function checkArrays(){
        for (i=0; i<9; i++){
            duplicateCheck = [0,0,0,0,0,0,0,0,0,0]
            for (let j=0; j<9; j++){
                if (board[i][j] !== "."){
                    if (duplicateCheck[board[i][j]]++ === 1) return false
                }
            }
        }
        return true
    }
    function checkVert(){
        for (i=0; i<9; i++){
            duplicateCheck = [0,0,0,0,0,0,0,0,0,0]
            for (let j=0; j<9; j++){
                if (board[j][i] !== "."){
                    if (duplicateCheck[board[j][i]]++ === 1) return false
                }
            }
        }
        return true
    }

    function checkBox(x,y){
        duplicateCheck = [0,0,0,0,0,0,0,0,0,0]
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                if (board[i+x][j+y] !== "."){
                    if (duplicateCheck[board[i+x][j+y]]++ === 1) return false
                }
            }
        }
    }

    return true    
};

/**
 * @param {character[][]} board
 * @return {boolean}
 * Runtime 1ms Beats 99.27%
 * Memory 57.77MB Beats 45.53%
 */
var isValidSudoku = function(board) {

    let duplicateCheck = [0,0,0,0,0,0,0,0,0,0]

    if (checkArrays() === false) return false
    if (checkVert() === false) return false

    for (let i=0; i<7; i +=3){
        for (let j=0; j<7; j += 3){
            if (checkBox(i,j) === false) return false
        }
    }

    function checkArrays(){
        for (i=0; i<9; i++){
            for (let j=0; j<9; j++){
                if (board[i][j] !== "."){
                    if (duplicateCheck[board[i][j]]++ === 1) return false
                }
            }
            duplicateCheck.fill(0)
        }
        return true
    }
    function checkVert(){
        for (i=0; i<9; i++){
            for (let j=0; j<9; j++){
                if (board[j][i] !== "."){
                    if (duplicateCheck[board[j][i]]++ === 1) return false
                }
            }
            duplicateCheck.fill(0)
        }
        return true
    }

    function checkBox(x,y){
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                if (board[i+x][j+y] !== "."){
                    if (duplicateCheck[board[i+x][j+y]]++ === 1) return false
                }
            }
        }
        duplicateCheck.fill(0)
    }

    return true    
};