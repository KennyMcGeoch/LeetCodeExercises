/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 2ms Beats 100.00%
 * Memory 66.55MB Beats 100.00%
 */
var maxTotalValue = function(nums, k) {
    return (Math.max(...nums)-Math.min(...nums)) * k
};