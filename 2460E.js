/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 65 ms, faster than 99.27% of JavaScript online submissions for Apply Operations to an Array.
 * Memory Usage: 42.5 MB, less than 92.66% of JavaScript online submissions for Apply Operations to an Array.
 * Runtime 0ms Beats 100.00% 
 * Memory 56.26MB Beats19.23%
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

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 2ms Beats 70.19%
 * Memory 57.20MB Beats 14.42%
 */
var applyOperations = function(nums) {
    let ans = []
    for (let i=1; i<nums.length; i++){
        if (nums[i-1] === nums[i]){
            nums[i-1] *= 2
            nums[i] = 0
        }
        if (nums[i-1])ans.push(nums[i-1])
    }
    if (nums[nums.length-1]) ans.push(nums[nums.length-1])
    while (ans.length < nums.length) ans.push(0)
    return ans
};