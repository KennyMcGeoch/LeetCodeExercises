/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * Runtime: 60 ms, faster than 63.49% of JavaScript online submissions for Game of Life.
 * Memory Usage: 42.1 MB, less than 65.08% of JavaScript online submissions for Game of Life.
 */
var gameOfLife = function(board) {
    let store = []
    let lenX = board.length
    let lenY = board[0].length
    
    for (let i=0; i< lenX; i++){
        for ( let j=0; j< lenY; j++){
            check(i,j)
        }
    }
    function check(x,y){
        let neighbours = 0 - board[x][y]
        for (let i=-1; i< 2; i++){
            for ( let j=-1; j< 2; j++){
                if (board[x+i] === undefined || board[x+i][y+j] === undefined)continue
                else if (board[x+i][y+j] === 1) neighbours++
            }
        }
        if (neighbours < 2) return store.push(0)
        else if (neighbours < 4 && board[x][y]) return store.push(1)
        else if (neighbours === 3) return store.push(1)
        else return store.push(0)
    }
    let count = 0
    for (let i=0; i< lenX; i++){
        for ( let j=0; j< lenY; j++){
            board[i][j] = store[count++]
        }
    }
    
};