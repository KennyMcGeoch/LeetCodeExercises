/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 92 ms, faster than 67.07% of JavaScript online submissions for Number of Zero-Filled Subarrays.
 * Memory Usage: 53.2 MB, less than 75.61% of JavaScript online submissions for Number of Zero-Filled Subarrays.
 * Runtime 3ms Beats 94.79%
 * Memory 66.38MB Beats 86.46%
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

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 2ms Beats 100.00%
 * Memory 64.50MB Beats 98.96%
 */
var zeroFilledSubarray = function(nums) {
    let ans = 0
    let curr = 0
    
    for (let i=0; i<nums.length; i++){
        if (nums[i]) curr = 0
        else ans += ++curr
    }

    return ans    
};