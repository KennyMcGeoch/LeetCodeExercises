/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats100.00%
 * Memory 55.02MB Beats 86.60%
 */
var minimumOperations = function(nums) {
    return nums.filter((a)=> a % 3 !== 0).length
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats100.00%
 * Memory 54.77MB Beats 91.75%
 */
var minimumOperations = function(nums) {
    return nums.reduce((a,b)=> a + (b% 3 !== 0),0)
};