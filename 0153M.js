const { default: test } = require("node:test");

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 92 ms, faster than 61.25% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
 * Memory Usage: 42.3 MB, less than 21.94% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
 */
 var findMin = function(nums) {

    let minPos = 0
    let maxPos = nums.length-1
    if (nums[minPos] < nums[maxPos]) return nums[minPos]

    while (minPos !== maxPos){
        test = Math.ceil((minPos + maxPos) / 2)
        if (nums[test] > nums[minPos]) minPos = test
        else if (nums[test] < nums[maxPos]) maxPos = test
        else return nums[maxPos]

    }

    return nums[maxPos]
    
};