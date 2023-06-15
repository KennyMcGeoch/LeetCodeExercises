/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 72 ms, faster than 78.58% of JavaScript online submissions for Concatenation of Array.
 * Memory Usage: 45 MB, less than 86.15% of JavaScript online submissions for Concatenation of Array.
 */
var getConcatenation = function(nums) {
    return nums.concat(nums)
    
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 84 ms, faster than 21.24% of JavaScript online submissions for Concatenation of Array.
 * Memory Usage: 44.6 MB, less than 96.78% of JavaScript online submissions for Concatenation of Array.
 */
var getConcatenation2 = function(nums) {
    let loops = nums.length
    for (i=0; i<loops; i++){
        nums.push(nums[i])
    }
    return nums    
};