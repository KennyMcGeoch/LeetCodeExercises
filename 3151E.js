/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 50.34MBBeats 100.00%
 */
var isArraySpecial = function(nums) {
    nums[0] %= 2
    for (let i=1; i<nums.length; i++){
        nums[i] %= 2
        if (nums[i] === nums[i-1]) return false
    }
    return true
};