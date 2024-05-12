/**
 * @param {number[][]} grid
 * @return {number[][]}
 * Runtime: 60 ms, faster than 92.45% of JavaScript online submissions for Largest Local Values in a Matrix.
 * Memory Usage: 52.9 MB, less than 68.87% of JavaScript online submissions for Largest Local Values in a Matrix.
 */
var largestLocal = function(grid) {
    
    let ans = []
    
    for (let i=0; i<grid.length; i++){
        for (let j=grid.length-1; j>1; j--){
            grid[i][j] = Math.max(grid[i][j],grid[i][j-1],grid[i][j-2])
        }
    }

    for (let i=grid.length-1; i > 1; i--){
        for (let j=2; j<grid.length; j++){
            grid[i][j] = Math.max(grid[i][j],grid[i-1][j],grid[i-2][j])
        }
    }
    
    let row = 0
    for (let i=2; i<grid.length; i++){
        ans.push([])
        for (let j=2; j<grid.length; j++){
            ans[row].push(grid[i][j])
        }
        row++
    }
    return ans
    
};