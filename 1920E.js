/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 0ms Beats 100.00%
 * Memory 59.05MB Beats 54.09%
 */
var buildArray = function(nums) {
    let ans = new Array(nums.length)

    for (let i=0; i<nums.length; i++){
        ans[i] = nums[nums[i]]
    }

    return ans
};