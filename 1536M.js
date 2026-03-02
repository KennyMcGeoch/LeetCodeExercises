/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 57.76MB Beats 100.00%
 */
var minSwaps = function(grid) {
    let toPlace = true
    for (let i=0; i<grid.length; i++){
        toPlace = true
        for (let j=grid.length-1; j>-1; j--){
            if (grid[i][j] === 1){
                grid[i] = grid.length - (j+1)
                j = -1
                toPlace = false
            }
        }
        if (toPlace) grid[i] = grid.length
    }
    let test = [...grid]
    test.sort((a,b)=>a-b)
    for (let i=0; i<test.length; i++){
        if (test[i] < i) return -1
    }

    let ans = 0
    let target = grid.length -1
    let temp = 0
    let curr = 0
    for (let i=0; i<grid.length; i++){
        if (grid[i] < target){
            for (let j=i+1; j<grid.length; j++){
                if (grid[j] >= target){
                    curr = j
                    j = 201
                }
            }
            while(curr > i){
                temp = grid[curr]
                grid[curr] = grid[curr-1]
                grid[--curr] = temp
                ans++
            }
        }
        target--
    }

    return ans
};