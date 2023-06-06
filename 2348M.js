/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 92 ms, faster than 67.07% of JavaScript online submissions for Number of Zero-Filled Subarrays.
 * Memory Usage: 53.2 MB, less than 75.61% of JavaScript online submissions for Number of Zero-Filled Subarrays.
 */
var zeroFilledSubarray = function(nums) {
    let total = 0
    let count = 0
    let loops = nums.length
    
    for (let i=0; i<loops; i++){
        if (nums[i] === 0){
            count++
            total += count
        }
        else count = 0
    }
    
    return total
    
};