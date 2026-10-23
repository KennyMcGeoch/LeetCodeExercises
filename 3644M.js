/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 67.24MB Beats 100.00%
 */
var sortPermutation = function(nums) {
    let ans = 131071

    for (let i=0; i<nums.length; i++){
        if (nums[i] !== i) ans &= nums[i]
    }
    if (ans === 131071) return 0
    return ans
};