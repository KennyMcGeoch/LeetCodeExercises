/**
 * @param {number[][]} land
 * @return {number[][]}
 * Runtime: 177 ms, faster than 97.78% of JavaScript online submissions for Find All Groups of Farmland.
 * Memory Usage: 74.1 MB, less than 97.78% of JavaScript online submissions for Find All Groups of Farmland.
 */
var findFarmland = function(land) {
    
    let ans = []
    let len = land[0].length
    
    for (let i=0; i<land.length; i++){
        for (let j=0; j<len; j++){
            if (land[i][j] === 1){
                let xEnd = findX(i,j)
                let yEnd = findY(i,j)
                ans.push([i,j,xEnd,yEnd])
                clearLand(i,j,xEnd,yEnd)
            }
        }
    }
    
    function findX(x,y){
        let tot = 0
        for (let k=x+1; k<land.length; k++){
            if (land[k][y] !== 1) return x+tot
            else tot++
        }
        return x + tot
    }
    
    function findY(x,y){
        let tot = 0
        for (let k=y+1; k<len; k++){
            if (land[x][k] !== 1) return y+tot
            else tot++
        }
        return y + tot
    }
    
    function clearLand(x,y,a,b){
        for (let k=x; k<=a; k++){
            for (let l=y; l<=b; l++){
                land[k][l] = 0
            }
        }
    }
    
    return ans
    
};