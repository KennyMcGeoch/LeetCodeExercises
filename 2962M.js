/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 89 ms, faster than 85.71% of JavaScript online submissions for Count Subarrays Where Max Element Appears at Least K Times.
 * Memory Usage: 62.1 MB, less than 67.86% of JavaScript online submissions for Count Subarrays Where Max Element Appears at Least K Times.
 */
var countSubarrays = function(nums, k) {
    
    let ans = 0
    let right = 0
    let valid = 0
    let target = Math.max(...nums)
    
    for (let i=0; i<nums.length; i++){
        if (i){
            if (nums[i-1]-- === target)valid--
        }
        while (valid < k && right < nums.length){
            if (nums[right++] === target) valid++
        }
        if (valid === k)ans += (nums.length-right+1)
        
    }
    
    return ans
    
};