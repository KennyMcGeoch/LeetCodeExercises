/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 341 ms, faster than 5.25% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 56.1 MB, less than 5.07% of JavaScript online submissions for Maximum Subarray.
 */
 var maxSubArray = function(nums) {

    let iterations = nums.length
    let totals = [nums[0]]

    for (i=1; i<iterations; i++){
        totals[i] = Math.max(nums[i], nums[i] + totals[i-1])
    }

    return totals.sort(function(a, b){return b-a})[0]
    
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])