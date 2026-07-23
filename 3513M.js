/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 72.96MB Beats 100.00%
 */
var uniqueXorTriplets = function(nums) {
    if (nums.length < 3) return nums.length

    let ans = 2

    while (ans <= nums.length) ans *=2

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 74.28MB Beats 66.67%
 */
var uniqueXorTriplets = function(nums) {

    if (nums.length < 3) return nums.length
    return 2 ** Math.ceil((Math.log(nums.length+1)/Math.log(2)))
};