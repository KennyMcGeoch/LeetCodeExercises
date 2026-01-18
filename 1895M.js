/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 23ms Beats 10.00%
 * Memory 58.37MB Beats 50.00%
 */
var largestMagicSquare = function(grid) {
    let vert = new Array(grid.length)
    let horiz = new Array(grid.length)
    let len = grid[0].length
    let val = 0
    let sum = 0
    let ans = 1
    let cand = 1
    vert[0] = new Array(len)
    for (let i=0; i<len; i++) vert[0][i] = grid[0][i]

    for (let i=1; i<vert.length; i++){
        vert[i] = new Array(len)
        for (let j=0; j<len; j++){
            vert[i][j] = vert[i-1][j] + grid[i][j]
        }
    }
    for (let i=0; i<horiz.length; i++){
        horiz[i] = new Array(len)
        horiz[i][0] = grid[i][0]
        for (let j=1; j<len; j++){
            horiz[i][j] = horiz[i][j-1] + grid[i][j]
        }
    }

    function magicSquare(x,y,size){
        if (y) val = horiz[x][y+size-1] - horiz[x][y-1]
        else val = horiz[x][y+size-1]
        for (let k=x+1; k< x+size; k++){
            if (y){
                if (horiz[k][y+size-1] - horiz[k][y-1] !== val) return false
            }
            else if (horiz[k][y+size-1] !== val) return false
        }
        for (let k=y; k<y+size; k++){
            if (x){
                if (vert[x+size-1][k] - vert[x-1][k] !== val) return false
            }
            else if (vert[x+size-1][k] !== val) return false
            
        }
        sum = 0
        for (let k=0; k<size; k++) sum += grid[x+k][y+k]
        if (sum !== val) return false
        for (let k=0; k<size; k++) sum -= grid[x+k][y+(size-1)-k]
        if (sum) return false
        return true
    }

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<len; j++){
            cand = ans
            while(i+cand < grid.length && j+cand < len){
                if (magicSquare(i,j,cand+1)) ans = cand+1
                cand++
            }
        }
    }

    return ans
    
};