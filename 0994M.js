/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 133 ms, faster than 42.34% of JavaScript online submissions for Rotting Oranges.
 * Memory Usage: 44 MB, less than 93.10% of JavaScript online submissions for Rotting Oranges.
 */
 var orangesRotting = function(grid) {
    
    let time = 1
    let iterationsX = grid[0].length
    let iterationsY = grid.length
    let rot = true

    if (grid.flat().includes(1) === false)return 0

    while (rot){
        rot = false
        for (i=0; i<iterationsX; i++){
            for (j=0; j<iterationsY; j++){
                if (grid[j][i] === 1 + time){
                    checkOrange(j,i,0)
                    rot = true
                }
            }
        }
        time++
    }

    function checkOrange(y,x,kill){
        if (y < 0 || y === iterationsY)return 0
        if (x < 0 || x === iterationsX)return 0
        if (grid[y][x] === 1){
            grid[y][x] = 2 + time
        }
        if (kill === 1)return 0
        return checkOrange(y+1,x,1) + checkOrange(y-1,x,1) + checkOrange(y,x+1,1) + checkOrange(y,x-1,1)
    }
     
    if (grid.flat().includes(1)) return -1
    
    return (grid.flat().sort((a,b)=>b-a)[0] - 2)
};