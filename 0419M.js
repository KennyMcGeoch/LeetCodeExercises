/**
 * @param {character[][]} board
 * @return {number}
 * Runtime: 103 ms, faster than 59.47% of JavaScript online submissions for Battleships in a Board.
 * Memory Usage: 42.5 MB, less than 67.42% of JavaScript online submissions for Battleships in a Board.
 */
 var countBattleships = function(board) {

    let total = 0
    let iterationsX = board[0].length
    let iterationsY = board.length

    for (i=0; i<iterationsX; i++){
        for (j=0; j<iterationsY; j++){
            if (board[j][i] === "X"){
                total++
                checkBoard(j,i)
            }
        }
    }

    function checkBoard(y,x){
        if (y < 0 || y === iterationsY)return 0
        if (x < 0 || x === iterationsX)return 0
        if (board[y][x] === ".")return 0
        board[y][x] = "."
        return checkBoard(y+1,x) + checkBoard(y-1,x) + checkBoard(y,x+1) + checkBoard(y,x-1)
    }
    return total   
};