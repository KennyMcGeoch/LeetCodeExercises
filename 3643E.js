/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 * Runtime 0ms Beats 100.00%
 * Memory 63.71MB Beat s92.59%
 */
var reverseSubmatrix = function(grid, x, y, k) {
    let high = x
    let low = x + k - 1
    let curr = 0

    while (high < low){
        for (let i=y; i<y+k; i++){
            curr = grid[high][i]
            grid[high][i] = grid[low][i]
            grid[low][i] = curr
        }
        high++
        low--
    }

    return grid
};