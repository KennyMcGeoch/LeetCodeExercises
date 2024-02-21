/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * Runtime: 110 ms, faster than 90.73% of JavaScript online submissions for Bitwise AND of Numbers Range.
 * Memory Usage: 54.1 MB, less than 63.42% of JavaScript online submissions for Bitwise AND of Numbers Range.
 */
var rangeBitwiseAnd = function(left, right) {
    
    while(right > left) right = right & (right-1)
    
    return right
    
};