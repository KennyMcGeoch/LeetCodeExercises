/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 62 ms, faster than 77.15% of JavaScript online submissions for Single Number II.
Memory Usage: 42.7 MB, less than 65.60% of JavaScript online submissions for Single Number II.
 */
var singleNumber = function(nums) {
    
    let iterations = nums.length

    nums.sort((a,b)=>a-b)
    
    for (let i=0; i<iterations; i+=3){
        if (nums[i] !== nums[i+1])return nums[i]
    }
    return 0
    
};