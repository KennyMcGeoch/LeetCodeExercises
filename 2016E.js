/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.48MB Beats 87.14%
 */
var maximumDifference = function(nums) {
    let ans = -1
    let min = nums[0]

    for (let i=1; i<nums.length; i++){
        if (nums[i] > min) ans = Math.max(ans, nums[i] - min)
        else min = nums[i]
    }

    return ans
};