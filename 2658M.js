/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 5ms Beats94.44%
 * Memory 55.83MB Beats 91.67%
 */
var findMaxFish = function(grid) {
    let ans = 0
    let curr = 0

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j] !== 0){
                curr = 0
                recur(i,j)
                ans = Math.max(ans,curr)
            }
        }
    }

    function recur(x,y){
        if (x < 0 || y < 0 || x === grid.length || y === grid[0].length) return
        if (grid[x][y] === 0) return
        curr += grid[x][y]
        grid[x][y] = 0
        return recur(x+1,y) + recur(x-1,y) + recur(x,y+1) + recur(x,y-1)
    }

    return ans
};