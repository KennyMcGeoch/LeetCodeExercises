/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 * Runtime 2ms Beats 96.88%
 * Memory 60.09MB Beats 68.75%
 */
var shiftGrid = function(grid, k) {
    let arr = new Array(grid.length)
    for (let i=0; i<grid.length; i++) arr[i] = new Array(grid[i].length)
    grid = grid.flat()
    k %= grid.length
    k = grid.length - k
    k %= grid.length

    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[i].length; j++){
            arr[i][j] = grid[k++]
            k %= grid.length
        }
    }

    return arr    
};