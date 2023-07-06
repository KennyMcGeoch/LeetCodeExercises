/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * Runtime: 74 ms, faster than 27.36% of JavaScript online submissions for Minimum Size Subarray Sum.
 * Memory Usage: 45 MB, less than 99.28% of JavaScript online submissions for Minimum Size Subarray Sum.
 */
var minSubArrayLen = function(target, nums) {
    let min = 0
    let max = 0
    let total = 1
    let len = 1
    let res = Infinity
    
    for (max; max<nums.length; max++){
        total += nums[max]
        len++
        if (total > target){
            while (total > target){
                total -= nums[min++]
                len--
            }
            if (len < res)res = len
            
        }
    }
    
    if (res === Infinity) return 0
    
    return res
    
};