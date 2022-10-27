/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 77 ms, faster than 82.48% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
 * Memory Usage: 42.4 MB, less than 98.98% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
 */
 var countNegatives = function(grid) {

    let count = 0
    let iterations = grid.length

    for (i=0; i<iterations; i++){
        checkSubArray(grid[i])
    }

    function checkSubArray(arr){
        for (j=0; j<arr.length; j++){
            if (arr[j] < 0){
                count += (arr.length - j)
                return
            }
        }
        return
    }

    return count    
};