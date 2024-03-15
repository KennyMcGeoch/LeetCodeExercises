/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 74 ms, faster than 94.99% of JavaScript online submissions for Product of Array Except Self.
 * Memory Usage: 61.8 MB, less than 33.46% of JavaScript online submissions for Product of Array Except Self.
 */
var productExceptSelf = function(nums) {
    
    let left = [1]
    let right = [1]
    
    let sum = 1
    for (let i=0; i<nums.length-1; i++) left.push(left[i] * nums[i])
    sum = 1
    for (let i=nums.length-1; i>0; i--) right.push(right[nums.length-i-1] * nums[i])
    right.reverse()
    
    let ans = []
    
    for (let i=0; i<left.length; i++)ans.push(left[i]*right[i])
    
    return ans
    
};