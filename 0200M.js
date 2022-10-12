/**
 * @param {character[][]} grid
 * @return {number}
 * Runtime: 95 ms, faster than 87.92% of JavaScript online submissions for Number of Islands.
 * Memory Usage: 45 MB, less than 68.83% of JavaScript online submissions for Number of Islands.
 */
 var numIslands = function(grid) {

    let totalIslands = 0
    let iterationsX = grid[0].length
    let iterationsY = grid.length

    for (i=0; i<iterationsX; i++){
        for (j=0; j<iterationsY; j++){
            if (grid[j][i] === "1"){
                totalIslands++
                checkIsland(j,i)
            }
        }
    }


    function checkIsland(y,x){
        if (y < 0 || y === iterationsY)return 0
        if (x < 0 || x === iterationsX)return 0
        if (grid[y][x] !== "1")return 0
        grid[y][x] = 2
        return checkIsland(y+1,x) + checkIsland(y-1,x) + checkIsland(y,x+1) + checkIsland(y,x-1)
    }


    return totalIslands
    
};

numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])