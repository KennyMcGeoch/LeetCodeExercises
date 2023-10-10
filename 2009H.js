/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 198 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Operations to Make Array Continuous.
 * Memory Usage: 61.9 MB, less than 96.55% of JavaScript online submissions for Minimum Number of Operations to Make Array Continuous.
 */
var minOperations = function(nums) {
    nums.sort((a,b)=>a-b)
    let unique = []
    for (let i=0; i<nums.length; i++){
        if (nums[i] !== nums[i+1]) unique.push(nums[i])
    }
    let most = 0
    let best = 0
    let index = 0
    
    for (let i=0; i<unique.length; i++){
        let target = unique[i] + nums.length
        while (unique[index] < target){
            index++
        }
        most = index - i
        if (most > best) best = most
    }
        
    return nums.length - best
    
};