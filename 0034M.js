/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 110 ms, faster than 23.31% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 * Memory Usage: 42.3 MB, less than 81.19% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 */
 var searchRange = function(nums, target) {
    
    let firstVal = nums.findIndex((a)=> a === target)
    
    if (firstVal === -1) return [-1,-1]
    
    let iterations = nums.length -1
    
    for (i=firstVal; i<iterations; i++){
        if (nums[i] !== nums[i+1]) return [firstVal, i]
    }
    
    return [firstVal, iterations]    
};