/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 * Runtime: 57 ms, faster than 75.65% of JavaScript online submissions for Keep Multiplying Found Values by Two.
 * Memory Usage: 42.3 MB, less than 73.58% of JavaScript online submissions for Keep Multiplying Found Values by Two.
 */
var findFinalValue = function(nums, original) {
    while (nums.includes(original)){
        original *= 2
    }
    return original    
};