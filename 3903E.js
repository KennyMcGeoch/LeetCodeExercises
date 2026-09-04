/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.78MB Beats 92.59%
 */
var firstStableIndex = function(nums, k) {
    let arr = new Array(nums.length)
    arr[nums.length-1] = nums[nums.length-1]
    for (let i=nums.length-2; i>-1; i--) arr[i] = Math.min(nums[i],arr[i+1])
    let max = 0

    for (let i=0; i<nums.length; i++){
        max = Math.max(max,nums[i])
        if (max - arr[i] <= k) return i
    }

    return -1
};