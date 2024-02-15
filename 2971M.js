/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 203 ms, faster than 49.15% of JavaScript online submissions for Find Polygon With the Largest Perimeter.
 * Memory Usage: 67.6 MB, less than 11.30% of JavaScript online submissions for Find Polygon With the Largest Perimeter.
 */
var largestPerimeter = function(nums) {
    
    nums.sort((a,b)=>b-a)
    let total = nums.reduce((a,b)=>a+b)
    let iterations = nums.length-2
    
    for (let i=0; i<iterations; i++){
        total -= nums[i]
        if (nums[i] < total) return total + nums[i]
    }
    
    return -1
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 199 ms, faster than 61.02% of JavaScript online submissions for Find Polygon With the Largest Perimeter.
 * Memory Usage: 67.3 MB, less than 11.30% of JavaScript online submissions for Find Polygon With the Largest Perimeter.
 */
var largestPerimeter = function(nums) {
    
    nums.sort((a,b)=>b-a)
    let total = nums.reduce((a,b)=>a+b)
    let iterations = nums.length-2
    
    for (let i=0; i<iterations; i++){
        if (nums[i] < total - nums[i]) return total
        else total -= nums[i]
    }
    
    return -1
    
};