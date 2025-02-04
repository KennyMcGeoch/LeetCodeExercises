/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 48.20MB Beats 96.74%
 */
var maxAscendingSum = function(nums) {
    let ans = 0
    let curr = nums[0]
    for (let i=1; i<nums.length; i++){
        if (nums[i] > nums[i-1]) curr += nums[i]
        else{
            ans = Math.max(ans,curr)
            curr = nums[i]
        }
    }
    return Math.max(ans,curr)
};