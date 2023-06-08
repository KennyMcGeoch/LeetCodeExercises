/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 74 ms, faster than 9.47% of JavaScript online submissions for Maximum Count of Positive Integer and Negative Integer.
 * Memory Usage: 44.4 MB, less than 66.74% of JavaScript online submissions for Maximum Count of Positive Integer and Negative Integer.
 */
var maximumCount = function(nums) {
    let loops = nums.length
    let min = 0
    let max = 0
    
    for (i=0; i<loops; i++){
        if (nums[i] < 0)min++
        else if (nums[i] > 0){
            max = loops - i
            i = loops
        }
    }
    return Math.max(min, max)
    
};