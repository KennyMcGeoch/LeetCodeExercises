/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.84MB Beats 57.45%
 */
var maxAdjacentDistance = function(nums) {
    let ans = Math.abs(nums[0] - nums[nums.length-1])

    for (let i=1; i<nums.length; i++) ans = Math.max(ans,Math.abs(nums[i]-nums[i-1]))

    return ans
};