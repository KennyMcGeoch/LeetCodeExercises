/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 69 ms, faster than 78.00% of JavaScript online submissions for Subarray Sums Divisible by K.
 * Memory Usage: 55 MB, less than 39.00% of JavaScript online submissions for Subarray Sums Divisible by K.
 */
var subarraysDivByK = function(nums, k) {
    let hash = {0:1}
    let total = 0
    let ans = 0
    
    for (let i=0; i<nums.length; i++){
        total += nums[i]
        total %= k
        if (total < 0) total += k
        if (hash[total] === undefined) hash[total] = 0
        ans += hash[total]++
    }
    
    return ans
    
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 58 ms, faster than 99.00% of JavaScript online submissions for Subarray Sums Divisible by K.
 * Memory Usage: 53.2 MB, less than 100.00% of JavaScript online submissions for Subarray Sums Divisible by K.
 */
var subarraysDivByK = function(nums, k) {
    let hash = new Array(k).fill(0)
    hash[0]++
    let total = 0
    let ans = 0
    
    for (let i=0; i<nums.length; i++){
        total += nums[i]
        total %= k
        if (total < 0) total += k
        if (hash[total] === undefined) hash[total] = 0
        ans += hash[total]++
    }
    
    return ans
    
};