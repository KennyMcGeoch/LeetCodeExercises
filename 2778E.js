/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.48MB Beats 96.10%
 */
var sumOfSquares = function(nums) {
    let ans = 0

    for (let i=0; i<nums.length; i++){
        if (nums.length % (i+1) === 0) ans += (nums[i]**2)
    }

    return ans
};