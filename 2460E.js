/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 65 ms, faster than 99.27% of JavaScript online submissions for Apply Operations to an Array.
 * Memory Usage: 42.5 MB, less than 92.66% of JavaScript online submissions for Apply Operations to an Array.
 */
 var applyOperations = function(nums) {

    let iterations = nums.length
    let count = 0

    for (i=0; i<iterations; i++){
        if (nums[i] === nums[i+1]){
            nums[i] *= 2
            nums[i+1] = 0
        }
    }

    for (i=0; i<iterations; i++){
        nums[count] = nums[i]
        if (nums[i] > 0)count++
    }

    for (i=count; i<iterations; i++){
        nums[i] = 0
    }
    
    return nums
};