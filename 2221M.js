/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 88 ms, faster than 95.10% of JavaScript online submissions for Find Triangular Sum of an Array.
 * Memory Usage: 43.7 MB, less than 88.11% of JavaScript online submissions for Find Triangular Sum of an Array.
 */
var triangularSum = function(nums) {
    
    let counter = nums.length
    
    while (--counter > 0){
        for (let i=0; i<counter; i++){
            nums[i] = (nums[i] + nums[i+1]) % 10
        }
    }
    return nums[0]
    
};