/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 4ms Beats 93.22%
 * Memory 57.76MB Beats 59.32%
 */
var closedIsland = function(grid) {
    let ans = 0

    for (let i=0; i<grid[0].length; i++){
        if (grid[0][i] === 0) recur(0,i)
        if (grid[grid.length-1][i] === 0)recur(grid.length-1,i)
    }
    for (let i=1; i<grid.length-1; i++){
        if (grid[i][0] === 0)recur(i,0)
        if (grid[i][grid[0].length-1] === 0)recur(i,grid[0].length-1)
    }

    for (let i=1; i<grid.length-1; i++){
        for (let j=1; j<grid[0].length-1; j++){
            if (grid[i][j] === 0){
                recur(i,j)
                ans++
            }
        }
    }
    

    function recur(x,y){
        if (x < 0 || y < 0 || x === grid.length || y === grid[0].length) return
        if (grid[x][y] === 1) return
        grid[x][y] = 1
        recur(x+1,y)
        recur(x-1,y)
        recur(x,y+1)
        recur(x,y-1)
    }

    return ans
};