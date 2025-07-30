/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 73 ms, faster than 75.76% of JavaScript online submissions for Longest Subarray With Maximum Bitwise AND.
 * Memory Usage: 59.9 MB, less than 93.94% of JavaScript online submissions for Longest Subarray With Maximum Bitwise AND.
 */
var longestSubarray = function(nums) {
    
    let max = nums[0]
    let ans = 1
    let curr = 1
    
    for (let i=1; i<nums.length; i++){
        if (nums[i] > max){
            max = nums[i]
            ans = 1
            curr = 1
        }
        else if (nums[i] === max) curr++
        else{
            ans = Math.max(ans,curr)
            curr = 0
        }
    }
    
    return Math.max(ans,curr)
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 69 ms, faster than 78.79% of JavaScript online submissions for Longest Subarray With Maximum Bitwise AND.
 * Memory Usage: 60.2 MB, less than 75.76% of JavaScript online submissions for Longest Subarray With Maximum Bitwise AND.
 * Runtime 2ms Beats 95.45%
 * Memory 66.40MB Beats31.82%
 */
var longestSubarray = function(nums) {
    
    let max = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i] > max) max = nums[i]
    }
    
    let ans = 0
    let curr = 0
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] === max) curr++
        else{
            if (curr) ans = Math.max(ans,curr)
            curr = 0
        }
    }
    
    return Math.max(ans,curr)
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 65.14MB Beats 68.18%
 */
var longestSubarray = function(nums) {
    
    let max = Math.max(...nums)
    
    let ans = 0
    let curr = 0
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] === max) curr++
        else{
            if (curr) ans = Math.max(ans,curr)
            curr = 0
        }
    }
    
    return Math.max(ans,curr)
};