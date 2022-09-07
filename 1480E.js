/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 93 ms, faster than 48.93% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 42.7 MB, less than 26.99% of JavaScript online submissions for Running Sum of 1d Array.
 */
 var runningSum = function(nums) {
    let runningCount = 0;
    let runningCountArray = [];
    for (i=0; i<nums.length; i++){
        runningCount += nums[i];
        runningCountArray.push(runningCount);
    }
    return runningCountArray
};

runningSum([1,2,3,4])