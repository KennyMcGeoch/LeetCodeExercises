/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 111 ms, faster than 36.49% of JavaScript online submissions for Squares of a Sorted Array.
 * Memory Usage: 48.1 MB, less than 94.10% of JavaScript online submissions for Squares of a Sorted Array.
 */
var sortedSquares = function(nums) {
    
    for (i=0; i<nums.length; i++){
        nums[i] **= 2
    }
    return nums.sort((a,b)=>a-b)
};