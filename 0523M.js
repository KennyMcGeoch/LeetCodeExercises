/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime: 222 ms, faster than 22.77% of JavaScript online submissions for Continuous Subarray Sum.
 * Memory Usage: 66.9 MB, less than 19.11% of JavaScript online submissions for Continuous Subarray Sum.
 */
 var checkSubarraySum = function(nums, k) {

    let total = nums[0]
    let iterations = nums.length
    let remainder = {}

    remainder[nums[0] % k] = 0

    for (i=1; i<iterations; i++){
        total += nums[i]
        tempRem = total % k
        if (tempRem === 0) return true
        if (remainder[tempRem] !== undefined){
            if (remainder[tempRem]+1 < i)return true
        }
        else remainder[tempRem] = i 
    }
    return false
    
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime: 106 ms, faster than 66.43% of JavaScript online submissions for Continuous Subarray Sum.
 * Memory Usage: 72.1 MB, less than 80.95% of JavaScript online submissions for Continuous Subarray Sum.
 */
var checkSubarraySum = function(nums, k) {

    let total = nums[0]
    let iterations = nums.length
    let remainder = {}

    remainder[nums[0] % k] = 0

    for (i=1; i<iterations; i++){
        total += nums[i]
        total %= k
        if (total === 0) return true
        if (remainder[total] !== undefined){
            if (remainder[total]+1 < i)return true
        }
        else remainder[total] = i 
    }
    return false
    
};

