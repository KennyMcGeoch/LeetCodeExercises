/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 55 ms, faster than 81.28% of JavaScript online submissions for Maximum Sum of Distinct Subarrays With Length K.
 * Memory Usage: 64.4 MB, less than 98.17% of JavaScript online submissions for Maximum Sum of Distinct Subarrays With Length K.
 */
var maximumSubarraySum = function(nums, k) {
    let ans = 0
    let hash = {}
    let curr = 0
    let dupe = 0
    
    for (let i=0; i<k; i++){
        curr += nums[i]
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
        if (hash[nums[i]] === 2) dupe++
    }
    if (dupe === 0) ans = curr
    
    for (let i=k; i<nums.length; i++){
        curr += nums[i]
        curr -= nums[i-k]
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
        if (hash[nums[i]] === 2) dupe++
        hash[nums[i-k]]--
        if (hash[nums[i-k]] === 1) dupe--
        if (dupe === 0) ans = Math.max(ans, curr)
        
    }
    
    return ans
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 32 ms, faster than 100.00% of JavaScript online submissions for Maximum Sum of Distinct Subarrays With Length K.
 * Memory Usage: 61.2 MB, less than 100.00% of JavaScript online submissions for Maximum Sum of Distinct Subarrays With Length K.
 */
var maximumSubarraySum = function(nums, k) {
    let ans = 0
    let hash = new Array(100001).fill(0)
    let curr = 0
    let dupe = 0
    
    for (let i=0; i<k; i++){
        curr += nums[i]
        hash[nums[i]]++
        if (hash[nums[i]] === 2) dupe++
    }
    if (dupe === 0) ans = curr
    
    for (let i=k; i<nums.length; i++){
        curr += nums[i]
        curr -= nums[i-k]
        hash[nums[i]]++
        if (hash[nums[i]] === 2) dupe++
        hash[nums[i-k]]--
        if (hash[nums[i-k]] === 1) dupe--
        if (dupe === 0) ans = Math.max(ans, curr)
        
    }
    
    return ans
};