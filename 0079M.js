/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * Runtime: 2264 ms, faster than 25.92% of JavaScript online submissions for Word Search.
 * Memory Usage: 48.9 MB, less than 25.04% of JavaScript online submissions for Word Search.
 */
 var exist = function(board, word) {

    let iterationsX = board[0].length
    let iterationsY = board.length
    let target = word.length
    solution = false

    for (i=0; i<iterationsY; i++){
        for (j=0; j<iterationsX; j++){
            if (board[i][j] === word[0]){
                spell(j,i,[],0)
            }
        }
    }

    function spell (x,y,prev, letter){
        if (letter === target){
            solution = true
            return
        }
        if (x < 0 || y < 0 || x === iterationsX || y === iterationsY)return
        current = (x*iterationsY) + y
        let curr = [...prev]
        if (curr.includes(current))return
        curr.push(current)
        if (board[y][x] !== word[letter])return
        return (spell(x+1,y,curr,letter+1)) + (spell(x-1,y,curr,letter+1)) + (spell(x,y+1,curr,letter+1)) + (spell(x,y-1,curr,letter+1))

    }

    return solution
    
};