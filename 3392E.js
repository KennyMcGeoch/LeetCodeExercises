/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 89.33%
 * Memory 55.97MB Beats93.33%
 */
var countSubarrays = function(nums) {
    let ans = 0
    let len = nums.length-1
    for (let i=0; i<len; i++){
        if (nums[i]/2 === nums[i-1] + nums[i+1]) ans++
    }
    return ans
};