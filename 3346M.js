/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 * Runtime 18ms Beats 100.00%
 * Memory 69.38MB Beats 100.00%
 */
var maxFrequency = function(nums, k, numOperations) {
    if (nums.length === 1) return 1
    let max = Math.max(...nums)
    let arr = new Array(max+1).fill(0)
    let min = 0
    max = 0
    let ans = 1
    
    for (let i=0; i<nums.length; i++) arr[nums[i]]++
    for (let i=0; i<k && i<arr.length; i++) max += arr[i]
    for (let i=0; i<arr.length; i++){
        if (i > k) min += arr[i-k-1]
        if (i + k < arr.length) max += arr[i+k]
        ans = Math.max(ans, arr[i] + Math.min(numOperations, max-min-arr[i]))
    }

    return ans
};