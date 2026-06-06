/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 1ms Beats 92.58%
 * Memory 58.06MB Beats 50.65%
 */
var leftRightDifference = function(nums) {
    let right = nums.reduce((a,b)=>a+b)
    let ans = []
    ans.push(right-nums[0])
    let left = 0
    right -= nums[0]
    for (let i=1; i<nums.length; i++){
        right -= nums[i]
        left += nums[i-1]
        ans.push(Math.abs(left-right))
    }

    return ans
};