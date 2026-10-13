/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 128ms Beats 100.00%
 * Memory 76.74MB Beats 85.71%
 */
var maxAlternatingSum = function(nums) {
    for (let i=0; i<nums.length; i++) nums[i] *= nums[i]
    nums.sort((a,b)=>b-a)
    let ans = 0
    let max = Math.floor((nums.length/2)+0.5)

    for (let i=0; i<max; i++) ans += nums[i]
    for (let i=max; i<nums.length; i++) ans -= nums[i]

    return ans
};