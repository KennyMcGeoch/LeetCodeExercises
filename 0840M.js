/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 41 ms, faster than 100.00% of JavaScript online submissions for Magic Squares In Grid.
 * Memory Usage: 48.4 MB, less than 100.00% of JavaScript online submissions for Magic Squares In Grid.
 */
var numMagicSquaresInside = function(grid) {
    
    let ans = 0
    
    for (let i=1; i<grid.length-1; i++){
        for (let j=1; j<grid[0].length-1; j++){
            if (grid[i][j] % 2 === 0)continue

            let sum = grid[i-1][j] + grid[i+1][j] + grid[i][j]
            if (grid[i-1][j+1] + grid[i+1][j+1] + grid[i][j+1] !== sum) continue
            if (grid[i-1][j-1] + grid[i+1][j-1] + grid[i][j-1] !== sum) continue
            if (grid[i][j+1] + grid[i][j-1] + grid[i][j] !== sum) continue
            if (grid[i+1][j+1] + grid[i+1][j-1] + grid[i+1][j] !== sum) continue
            if (grid[i-1][j+1] + grid[i-1][j-1] + grid[i-1][j] !== sum) continue
            if (grid[i-1][j-1] + grid[i+1][j+1] + grid[i][j] !== sum) continue
            if (grid[i-1][j+1] + grid[i+1][j-1] + grid[i][j] !== sum) continue
            
            let nums = {}
            nums[grid[i-1][j]] = true
            nums[grid[i][j]] = true
            nums[grid[i+1][j]] = true
            nums[grid[i-1][j-1]] = true
            nums[grid[i][j-1]] = true
            nums[grid[i+1][j-1]] = true
            nums[grid[i-1][j+1]] = true
            nums[grid[i][j+1]] = true
            nums[grid[i+1][j+1]] = true
            
            if (nums[1] && nums[2] && nums[3] && nums[4] && nums[5] && nums[6] && nums[7] && nums[8] && nums[9] )ans++
        }
    }
    
    return ans
    
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 38 ms, faster than 100.00% of JavaScript online submissions for Magic Squares In Grid.
 * Memory Usage: 48.6 MB, less than 100.00% of JavaScript online submissions for Magic Squares In Grid.
 */
var numMagicSquaresInside = function(grid) {
    
    let ans = 0
    
    for (let i=1; i<grid.length-1; i++){
        for (let j=1; j<grid[0].length-1; j++){
            if (grid[i][j] !== 5)continue

            let sum = grid[i-1][j] + grid[i+1][j] + grid[i][j]
            if (grid[i-1][j+1] + grid[i+1][j+1] + grid[i][j+1] !== sum) continue
            if (grid[i-1][j-1] + grid[i+1][j-1] + grid[i][j-1] !== sum) continue
            if (grid[i][j+1] + grid[i][j-1] + grid[i][j] !== sum) continue
            if (grid[i+1][j+1] + grid[i+1][j-1] + grid[i+1][j] !== sum) continue
            if (grid[i-1][j+1] + grid[i-1][j-1] + grid[i-1][j] !== sum) continue
            if (grid[i-1][j-1] + grid[i+1][j+1] + grid[i][j] !== sum) continue
            if (grid[i-1][j+1] + grid[i+1][j-1] + grid[i][j] !== sum) continue
            
            let nums = {}
            nums[grid[i-1][j]] = true
            nums[grid[i][j]] = true
            nums[grid[i+1][j]] = true
            nums[grid[i-1][j-1]] = true
            nums[grid[i][j-1]] = true
            nums[grid[i+1][j-1]] = true
            nums[grid[i-1][j+1]] = true
            nums[grid[i][j+1]] = true
            nums[grid[i+1][j+1]] = true
            
            if (nums[1] && nums[2] && nums[3] && nums[4] && nums[5] && nums[6] && nums[7] && nums[8] && nums[9] )ans++
        }
    }
    
    return ans
    
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 42 ms, faster than 100.00% of JavaScript online submissions for Magic Squares In Grid.
 * Memory Usage: 48.7 MB, less than 100.00% of JavaScript online submissions for Magic Squares In Grid.
 */
var numMagicSquaresInside = function(grid) {
    
    let ans = 0
    
    for (let i=1; i<grid.length-1; i++){
        for (let j=1; j<grid[0].length-1; j++){
            if (grid[i][j] !== 5)continue

            if (grid[i-1][j] + grid[i+1][j] + grid[i][j] !== 15) continue
            if (grid[i-1][j+1] + grid[i+1][j+1] + grid[i][j+1] !== 15) continue
            if (grid[i-1][j-1] + grid[i+1][j-1] + grid[i][j-1] !== 15) continue
            if (grid[i][j+1] + grid[i][j-1] + grid[i][j] !== 15) continue
            if (grid[i+1][j+1] + grid[i+1][j-1] + grid[i+1][j] !== 15) continue
            if (grid[i-1][j+1] + grid[i-1][j-1] + grid[i-1][j] !== 15) continue
            if (grid[i-1][j-1] + grid[i+1][j+1] + grid[i][j] !== 15) continue
            if (grid[i-1][j+1] + grid[i+1][j-1] + grid[i][j] !== 15) continue
            
            let nums = {}
            nums[grid[i-1][j]] = true
            nums[grid[i][j]] = true
            nums[grid[i+1][j]] = true
            nums[grid[i-1][j-1]] = true
            nums[grid[i][j-1]] = true
            nums[grid[i+1][j-1]] = true
            nums[grid[i-1][j+1]] = true
            nums[grid[i][j+1]] = true
            nums[grid[i+1][j+1]] = true
            
            if (nums[1] && nums[2] && nums[3] && nums[4] && nums[5] && nums[6] && nums[7] && nums[8] && nums[9] )ans++
        }
    }
    
    return ans
    
};