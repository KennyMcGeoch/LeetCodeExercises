/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 8ms Beats 70.48%
 * Memory 57.51MB Beats 52.41%
 */
var minimumDifference = function(nums, k) {
    if (nums.length === 1) return 0
    let ans = Infinity
    nums.sort((a,b)=>a-b)
    for (let i=k-1; i<nums.length; i++) ans = Math.min(ans, nums[i]-nums[i-k+1])
    return ans
};