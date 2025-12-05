/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.68MB Beats 72.58%
 */
var countPartitions = function(nums) {
    let max = nums.reduce((a,b)=>a+b)
    if (max % 2 === 1) return 0
    return nums.length-1
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.60MB Beats 75.81%
 */
var countPartitions = function(nums) {
    if (nums.reduce((a,b)=>a+b) % 2 === 1) return 0
    return nums.length-1
};