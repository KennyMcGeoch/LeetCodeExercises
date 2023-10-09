/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 46 ms, faster than 95.02% of JavaScript online submissions for Find Target Indices After Sorting Array.
 * Memory Usage: 42 MB, less than 98.61% of JavaScript online submissions for Find Target Indices After Sorting Array.
 */
var targetIndices = function(nums, target) {
    
    let less = 0
    let count = 0
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] < target) less++
        else if (nums[i] === target)count++
    }
    let solution = []
    while (count-- > 0){
        solution.push(less++)
    }
    return solution
    
};