/**
 * @param {number[][]} grid
 * @return {number[]}
 * Runtime 20ms Beats 100.00%
 * Memory 58.72MB Beats 87.50%
 */
var getBiggestThree = function(grid) {
    let width = grid[0].length
    let height = grid.length
    let ans = [0,0,0]
    let len = 1
    let sum = 0

    for (let i=0; i<height; i++){
        for (let j=0; j<width; j++){
            sum = grid[i][j]
            if (ans.includes(sum) === false){
                    if (sum > ans[0]){
                    ans[2] = ans[1]
                    ans[1] = ans[0]
                    ans[0] = sum
                    }
                    else if (sum > ans[1]){
                        ans[2] = ans[1]
                        ans[1] = sum
                    }
                    else if (sum > ans[2]) ans[2] = sum
            }
            len = 1
            while(i-len >= 0 && i+len < height && j-len >= 0 && j+len < width){
                sum = calc(i,j,len)
                
                if (ans.includes(sum) === false){
                    if (sum > ans[0]){
                    ans[2] = ans[1]
                    ans[1] = ans[0]
                    ans[0] = sum
                    }
                    else if (sum > ans[1]){
                        ans[2] = ans[1]
                        ans[1] = sum
                    }
                    else if (sum > ans[2]) ans[2] = sum
                    }
                len++
            }
        }
    }

    function calc(x,y,leng){
        let total = grid[x+leng][y] + grid[x-leng][y] + grid[x][y+leng] + grid[x][y-leng]
        for (let k=leng-1; k>0; k--){
            total += grid[x+leng-k][y+k] + grid[x+leng-k][y-k] + grid[x-leng+k][y+k] + grid[x-leng+k][y-k]
        }
        return total
    }

    return ans.filter((a)=> a)
};