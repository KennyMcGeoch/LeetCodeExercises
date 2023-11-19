/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 171 ms, faster than 100.00% of JavaScript online submissions for Reduction Operations to Make the Array Elements Equal.
 * Memory Usage: 54.7 MB, less than 60.87% of JavaScript online submissions for Reduction Operations to Make the Array Elements Equal.
 */
var reductionOperations = function(nums) {
    nums.sort((a,b)=>a-b)
    let total = 0
    let count = 0
    for (let i=1; i<nums.length; i++){
        if (nums[i] !== nums[i-1])count++
        total += count
    }
    return total
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 180 ms, faster than 95.65% of JavaScript online submissions for Reduction Operations to Make the Array Elements Equal.
 * Memory Usage: 54.2 MB, less than 73.91% of JavaScript online submissions for Reduction Operations to Make the Array Elements Equal.
 */
var reductionOperations = function(nums) {
    nums.sort((a,b)=>a-b)
    let total = 0 
    for (let i=1; i<nums.length; i++){
        if (nums[i] !== nums[i-1])total += nums.length-i
    }
    return total
    
};