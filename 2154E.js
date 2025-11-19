/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 * Runtime: 57 ms, faster than 75.65% of JavaScript online submissions for Keep Multiplying Found Values by Two.
 * Memory Usage: 42.3 MB, less than 73.58% of JavaScript online submissions for Keep Multiplying Found Values by Two.
 * Runtime 0ms Beats 100.00%
 * Memory 54.17MB Beats 93.44%
 */
var findFinalValue = function(nums, original) {
    while (nums.includes(original)){
        original *= 2
    }
    return original    
};

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.38MB Beats 51.91%
 */
var findFinalValue = function(nums, original) {
    let hash = new Set(nums)
    while(hash.has(original)) original *= 2
    return original
};