/**
 * @param {number[][]} board
 * @return {number}
 * Runtime 153ms Beats5.19%
 * Memory 55.69MB Beats 99.14%
 */
var snakesAndLadders = function(board) {
    board.reverse()
    for (let i=1; i<board.length; i += 2){
        board[i].reverse()
    }
    board = board.flat()
    let hash = new Array(board.length).fill(401)

    function trav(ind, num){
        if (hash[ind] <= num) return
        hash[ind] = num
        for (let i=1; i<7; i++){
            if (ind+i >= board.length) return
            if (board[ind+i] === -1) trav(ind+i,num+1)
            else trav(board[ind+i]-1, num+1)
        }
    }
    trav(0,0)
    if (hash[hash.length-1] === 401) return -1
    return hash[hash.length-1]
};