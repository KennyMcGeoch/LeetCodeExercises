/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 48 ms, faster than 92.74% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
 * Memory Usage: 42.4 MB, less than 57.87% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
 */
var findLengthOfLCIS = function(nums) {
    let max = 0
    let curr = 1
    let loops = nums.length - 1
    
    for (let i=0; i<loops; i++){
        if (nums[i+1] > nums[i])curr++
        else{
            max = Math.max(max,curr)
            curr = 1
        }
    }
    return Math.max(max,curr)
};