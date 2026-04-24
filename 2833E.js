/**
 * @param {string} moves
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 56.00MB Beats 82.88%
 */
var furthestDistanceFromOrigin = function(moves) {
    let l = 0
    let n = 0

    for (let i=0; i<moves.length; i++){
        if (moves[i] === "L") l++
        else if (moves[i] === "R") l--
        else n++
    }

    return Math.abs(l) + n
};