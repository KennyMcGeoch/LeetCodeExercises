/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 * Runtime 8ms Beats 25.00%
 * Memory 72.08MB Beats 87.50%
 */
var countSubmatrices = function(grid, k) {
    let ans = 0
    for (let i=0; i<grid.length; i++){
        for (let j=1; j<grid[0].length; j++){
            if (i){
                grid[i][j] += grid[i][j-1]
            }
            else{
                grid[i][j] += grid[i][j-1]
                if (grid[i][j] <= k) ans++
            }
        }
    }
    for (let i=1; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            grid[i][j] += grid[i-1][j]
            if (grid[i][j] <= k) ans++
        }
    }

    return ans + (grid[0][0] <= k)
};