/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Runtime: 2 ms, faster than 100.00% of JavaScript online submissions for Find the Power of K-Size Subarrays I.
 * Memory Usage: 52.8 MB, less than 54.05% of JavaScript online submissions for Find the Power of K-Size Subarrays I.
 */
var resultsArray = function(nums, k) {
    if (k === 1) return nums
    let val = new Set()
    let count = 1
    for (let i=1; i<nums.length; i++){
        if (nums[i] === nums[i-1] + 1) count++
        else count = 1
        if (count >= k) val.add(i)
    }
    let ans = []
    for (let i=k-1; i<nums.length; i++){
        if (val.has(i)) ans.push(nums[i])
        else ans.push(-1)
    }
    return ans
};