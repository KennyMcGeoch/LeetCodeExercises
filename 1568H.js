/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 80 ms, faster than 18.75% of JavaScript online submissions for Minimum Number of Days to Disconnect Island.
 * Memory Usage: 53.6 MB, less than 25.00% of JavaScript online submissions for Minimum Number of Days to Disconnect Island.
 */
var minDays = function(grid) {
    let zeros = 0
    let islands = 0
    let len = grid[0].length
    
    for (let i=0; i<grid.length; i++){
        for (let j=0; j<len; j++){
            if (grid[i][j] === 1){
                if (++islands === 2) return 0
                recur(i,j)
            }
            else if (grid[i][j] === 0) zeros++
        }
    }

    if (islands === 0) return 0
    if (zeros === 0) return 2
    else if ((grid.length * len) - zeros === 1) return 1
    else if ((grid.length * len) - zeros === 2) return 2
    let cand = []
    for (let i=0; i<grid.length; i++){
        for (let j=0; j<len; j++){
            if (grid[i][j] === 2){
                if ((calc(i-1,j)+calc(i+1,j)+calc(i,j+1)+calc(i,j-1)) === 2) return 1
            }           
        }
    }
        
        for (let i=0; i<grid.length; i++){
            for (let j=0; j<len; j++){
                if (grid[i][j] === 2){
                    if ((findZero(i-1,j)+findZero(i+1,j)+findZero(i,j+1)+findZero(i,j-1)) > 1) cand.push([i,j])
                    else if((findZero(i-1,j-1)+findZero(i+1,j+1)+findZero(i-1,j+1)+findZero(i+1,j-1)) > 1) cand.push([i,j]) 
                }           
            }
    }

    for (let k=0; k<cand.length; k++){
        islands = 0
        grid[cand[k][0]][cand[k][1]] = 0
        for (let i=0; i<grid.length; i++){
            for (let j=0; j<len; j++){
                if (grid[i][j] === 2 - (k%2)){
                    if (++islands === 2) return 1
                    if (k % 2 === 0) recurTwo(i,j)
                    else recur(i,j)
                }
            }
        }
        grid[cand[k][0]][cand[k][1]] = (k % 2) + 1
    }
    
    function recur(x,y){
        if (x < 0 || y < 0 || x === grid.length || y == len) return
        if (grid[x][y] !== 1) return
        grid[x][y] = 2
        return recur(x+1,y) + recur(x-1,y) + recur(x,y+1) + recur(x,y-1)
    }
    
    function recurTwo(x,y){
        if (x < 0 || y < 0 || x === grid.length || y == len) return
        if (grid[x][y] !== 2) return
        grid[x][y] = 1
        return recurTwo(x+1,y) + recurTwo(x-1,y) + recurTwo(x,y+1) + recurTwo(x,y-1)
    }
    
    function calc(x,y){
        if (x < 0 || y < 0 || x === grid.length || y == len) return 0
        else return grid[x][y]
    }
    
    function findZero(x,y){
        if (x < 0 || y < 0 || x === grid.length || y == len) return 1
        else if (grid[x][y] === 0) return 1
        else return 0
    }
    
    return 2
    
};