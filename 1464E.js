/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 54 ms, faster than 65.23% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
 * Memory Usage: 42.3 MB, less than 71.99% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
 */
var maxProduct = function(nums) {
    
    nums.sort((a,b)=> b-a)
    
    return (nums[0]-1) * (nums[1]-1)
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 45 ms, faster than 94.92% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
 * Memory Usage: 44.2 MB, less than 13.53% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
 */
var maxProduct = function(nums) {
    
    let max = [nums[0], nums[1]]
    max.sort((a,b)=> a-b)
    
    for (let i=2; i<nums.length; i++){
        if (nums[i] > max[0]){
            max[0] = nums[i]
            max.sort((a,b)=> a-b)
        }
    }
    
    return (max[0]-1) * (max[1]-1)
    
};