/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 5ms Beats 93.33%
 * Memory 64.78MB Beats 41.67%
 */
var minOperations = function(nums) {
    let ans = 0
    for (let i=0; i<nums.length-2; i++){
        if (nums[i] === 0){
            if (nums[i+1] === 1) nums[i+1] = 0
            else nums[i+1] = 1
            if (nums[i+2] === 1) nums[i+2] = 0
            else nums[i+2] = 1
            ans++
        }
    }
    if (nums[nums.length-1] === 0 || nums[nums.length-2] === 0) return -1
    return ans
};