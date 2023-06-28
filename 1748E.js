/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 49 ms, faster than 95.61% of JavaScript online submissions for Sum of Unique Elements.
 * Memory Usage: 42.1 MB, less than 59.12% of JavaScript online submissions for Sum of Unique Elements.
 */
var sumOfUnique = function(nums) {
    
    let total = 0
    let heap = {}
    let loops = nums.length
    
    for(i=0; i<loops; i++){
        if (heap[nums[i]] === undefined)heap[nums[i]] = 1
        else heap[nums[i]]++
    }
    for(i=0; i<loops; i++){
        if (heap[nums[i]] === 1) total += nums[i]
    }        
    return total    
};