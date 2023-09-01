/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 80 ms, faster than 93.02% of JavaScript online submissions for Grid Game.
 * Memory Usage: 53.4 MB, less than 86.05% of JavaScript online submissions for Grid Game.
 */
var gridGame = function(grid) {
    
    let topSum = grid[0].reduce((partialSum, a) => partialSum + a, 0)
    let botSum = 0
    let best = Infinity
    let len = grid[0].length
    
    for (let i=0; i<len; i++){
        topSum -= grid[0][i]
        let tempBest = Math.max(topSum, botSum)
        best = Math.min(best, tempBest)
        botSum += grid[1][i]
    }
    return best
    
};