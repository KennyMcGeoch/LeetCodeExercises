/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 * Runtime: 1 ms, faster than 100.00% of JavaScript online submissions for Maximum XOR for Each Query.
 * Memory Usage: 74.3 MB, less than 90.32% of JavaScript online submissions for Maximum XOR for Each Query.
 */
var getMaximumXor = function(nums, maximumBit) {
    maximumBit = 2**maximumBit - 1
    
    nums[0] ^= maximumBit
    
    for (let i=1; i<nums.length; i++){
        nums[i] ^= nums[i-1]
    }
    return nums.reverse()
};