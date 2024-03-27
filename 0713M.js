/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 63 ms, faster than 86.79% of JavaScript online submissions for Subarray Product Less Than K.
 * Memory Usage: 54.9 MB, less than 27.49% of JavaScript online submissions for Subarray Product Less Than K.
 */
var numSubarrayProductLessThanK = function(nums, k) {
    
    if (k === 0) return 0
    let ans = 0
    let curr = 1
    let left = 0
    
    for (let i=0; i<nums.length; i++){
        curr *= nums[i]
        while (curr >= k && left <= i) curr /= nums[left++]
        ans += (i + 1 - left)        
    }
    
    return ans
    
};