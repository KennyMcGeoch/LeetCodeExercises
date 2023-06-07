/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 61 ms, faster than 68.45% of JavaScript online submissions for Find the Array Concatenation Value.
 * Memory Usage: 44.5 MB, less than 62.03% of JavaScript online submissions for Find the Array Concatenation Value.
 */
var findTheArrayConcVal = function(nums) {
    
    let total = 0
    
    let i = 0
    let j = nums.length - 1
    
    while (i < j){
        let temp = nums[i++].toString() + nums[j--].toString()
        total += parseInt(temp)
    }
    if (i === j) total += nums[i]
    
    return total 
};