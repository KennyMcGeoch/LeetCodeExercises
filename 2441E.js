/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 55 ms, faster than 96.96% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
 * Memory Usage: 50.6 MB, less than 96.96% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
 */
var findMaxK = function(nums) {
    
    let hash = new Set()
    let max = -1
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] < 0){
            if (hash.has(nums[i] * -1)) max = Math.max(max, nums[i] * -1)
        }
        else{
            if (hash.has(nums[i] * -1)) max = Math.max(max, nums[i])
        }
        hash.add(nums[i])
    }
    return max
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 68 ms, faster than 66.09% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
 * Memory Usage: 50.9 MB, less than 92.61% of JavaScript online submissions for Largest Positive Integer That Exists With Its Negative.
 */
var findMaxK = function(nums) {
    
    nums.sort((a,b)=>a-b)
    let left = 0
    let right = nums.length-1
    
    while (left < right){
        if (nums[right] + nums[left] === 0) return nums[right]
        else if (nums[right] + nums[left] < 0) left++
        else right--
    }
    
    return -1
    
};