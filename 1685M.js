/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 165 ms, faster than 82.14% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
 * Memory Usage: 72.5 MB, less than 17.86% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
 */
var getSumAbsoluteDifferences = function(nums) {
    
    let hash = {0:nums[0]}
    for (let i=1; i<nums.length; i++) hash[i] = hash[i-1] + nums[i]
    let ans = [hash[nums.length-1] - (nums[0] * nums.length)]
    for (let i=1; i<nums.length-1; i++){
        let temp = 0
        temp += ((nums[i] * i) - hash[i-1])
        temp += ((hash[nums.length-1] - hash[i]) - (nums[i] * (nums.length - i - 1)))
        ans.push(temp)
    }
    ans.push((nums[nums.length-1] * nums.length) - hash[nums.length-1])
    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 170 ms, faster than 78.57% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
 * Memory Usage: 67.6 MB, less than 96.43% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
 */
var getSumAbsoluteDifferences = function(nums) {
    
    let sum = 0
    for (let i=0; i<nums.length; i++) sum += nums[i]
    let ans = []
    let curr = 0
    for (let i=0; i<nums.length; i++){
        let temp = 0
        temp += ((nums[i] * i) - curr)
        temp += ((sum - curr) - (nums[i] * (nums.length - i)))
        curr += nums[i]
        ans.push(temp)
    }
    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 150 ms, faster than 100.00% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
 * Memory Usage: 67.8 MB, less than 92.86% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
 */
var getSumAbsoluteDifferences = function(nums) {
    
    let sum = 0
    for (let i=0; i<nums.length; i++) sum += nums[i]
    let curr = 0
    for (let i=0; i<nums.length; i++){
        let temp = 0
        temp += ((nums[i] * i) - curr)
        temp += ((sum - curr) - (nums[i] * (nums.length - i)))
        curr += nums[i]
        nums[i] = temp // Faster than making a new array but not best practice outside of competition
    }
    return nums
    
};