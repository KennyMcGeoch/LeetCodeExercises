/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 11ms Beats 86.67%
 * Memory 79.64MB Beats 53.33%
 */
var maxSubarraySum = function(nums, k) {
    let curr = 0
    let prefix = new Array(nums.length).fill(0)
    for (let i=0; i<k; i++) curr += nums[i]
    prefix[k-1] = curr
    let ans = curr
    for (let i=k; i<nums.length; i++){
        curr -= nums[i-k]
        curr += nums[i]
        if (prefix[i-k] > 0) prefix[i] += prefix[i-k]
        prefix[i] += curr
        if (ans < prefix[i]) ans = prefix[i]
    }
    return ans
};