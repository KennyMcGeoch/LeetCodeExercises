/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 143 ms, faster than 45.51% of JavaScript online submissions for Max Area of Island.
 * Memory Usage: 45.2 MB, less than 61.84% of JavaScript online submissions for Max Area of Island.
 */
 var maxAreaOfIsland = function(grid) {

    let maxVol = 0
    let iterationsX = grid[0].length
    let iterationsY = grid.length
    let islandSize

    for (i=0; i<iterationsX; i++){
        for (j=0; j<iterationsY; j++){
            if (grid[j][i] === 1){
                islandSize = 0
                checkIsland(j,i,1)
                maxVol = Math.max(islandSize,maxVol)
            }
        }
    }

    function checkIsland(y,x){
        if (y < 0 || y === iterationsY)return 0
        if (x < 0 || x === iterationsX)return 0
        if (grid[y][x] !== 1)return 0
        islandSize++
        grid[y][x] = 0
        return checkIsland(y+1,x) + checkIsland(y-1,x) + checkIsland(y,x+1) + checkIsland(y,x-1)
    }
    return maxVol   
};