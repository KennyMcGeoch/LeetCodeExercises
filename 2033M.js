/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 * Runtime 175ms Beats 33.33%
 * Memory 81.20MB Beats 53.33%
 */
var minOperations = function(grid, x) {
    grid = grid.flat(1).sort((a,b)=>a-b)
    
    let remain = grid[0] % x
    let curr = 0
    for (let i=1; i<grid.length; i++){
        if (grid[i] % x !== remain) return -1
        curr += ((grid[i]-grid[0])/x)
    }
    let min = curr
    let val = grid[0]
    let ind = 0
    while(curr <= min){
        val += x
        while(grid[ind] < val) ind++
        curr += ind + ind
        curr -= grid.length
        min = Math.min(min,curr)
    }

    return min
};