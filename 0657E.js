/**
 * @param {string} moves
 * @return {boolean}
 * Runtime 1ms Beats 99.31%
 * Memory 55.04MB Beats 79.58%
 */
var judgeCircle = function(moves) {
    if (moves.length % 2 === 1) return false
    let v = 0
    let h = 0

    for (let i=0; i<moves.length; i++){
        if (moves[i] === "U") v++
        else if (moves[i] === "D") v--
        else if (moves[i] === "L") h++
        else h--
    }

    if (v || h) return false
    return true
};

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if (moves.length % 2 === 1) return false
    let v = 0
    let h = 0
    moves = moves.split("")

    for (let i=0; i<moves.length; i++){
        if (moves[i] === "U") v++
        else if (moves[i] === "D") v--
        else if (moves[i] === "L") h++
        else h--
    }

    if (v || h) return false
    return true
};