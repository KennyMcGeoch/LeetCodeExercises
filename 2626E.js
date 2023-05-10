/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 * Runtime: 52 ms, faster than 93.56% of JavaScript online submissions for Array Reduce Transformation.
 * Memory Usage: 42.6 MB, less than 49.27% of JavaScript online submissions for Array Reduce Transformation.
 */
var reduce = function(nums, fn, init) {
    
    let total = init
    let loops = nums.length
    
    for (i=0; i<loops; i++){
        total = fn(total, nums[i])
    }
    return total
    
};