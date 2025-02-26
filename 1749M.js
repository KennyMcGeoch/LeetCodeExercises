/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 60.88MB Beats 21.74%
 */
var maxAbsoluteSum = function(nums) {
    let pmin = nums[0]
    let min = nums[0]
    let pmax = nums[0]
    let max = nums[0]

    for (let i=1; i<nums.length; i++){
        pmin = Math.min(pmin + nums[i], nums[i])
        min = Math.min(min,pmin)
        pmax = Math.max(pmax + nums[i], nums[i])
        max = Math.max(max,pmax)
    }
    if (max+min > 0) return max
    else return min * -1
};