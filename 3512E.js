/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 1ms Beats 78.24%
 * Memory 55.82MB Beats97.71%
 */
var minOperations = function(nums, k) {
    return nums.reduce((a,b)=>a+b) % k
};