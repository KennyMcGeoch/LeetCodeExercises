/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 82ms Beats 100.00%
 * Memory 75.94MB Beats 100.00%
 */
var maxIncreasingSubarrays = function(nums) {
    let ans = 0
    let curr = 1
    let prev = 0
    for (let i=1; i<nums.length; i++){
        if (nums[i] > nums[i-1]) curr++
        else{
            ans = Math.max(ans, Math.floor(curr/2), Math.min(curr,prev))
            prev = curr
            curr = 1
        }
    }
    return Math.max(ans, Math.floor(curr/2), Math.min(curr,prev))
};