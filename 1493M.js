/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 52 ms, faster than 99.33% of JavaScript online submissions for Longest Subarray of 1's After Deleting One Element.
 * Memory Usage: 45.7 MB, less than 76.77% of JavaScript online submissions for Longest Subarray of 1's After Deleting One Element.
 */
var longestSubarray = function(nums) {
    
    let curr = 0
    let prev = -1
    let max = 0
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] === 0){
            max = Math.max(max, curr + prev)
            prev = curr
            curr = 0   
        }
        else curr++
    }
    max = Math.max(max, curr + prev)
    
    return max
    
};