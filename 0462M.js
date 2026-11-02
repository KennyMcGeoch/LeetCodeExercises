/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 5ms Beats 87.23%
 * Memory 56.61MB Beats 80.85%
 */
var minMoves2 = function(nums) {
    if (nums.length === 1) return 0
    nums.sort((a,b)=>a-b)
    
    let median = 0
    let ans = 0

    if (nums.length % 2 === 1) median = nums[(nums.length/2) - 0.5]
    else median = Math.floor(0.5 * (nums[(nums.length/2) - 1] + nums[(nums.length/2)]))

    for (let i=0; i<nums.length; i++) ans += Math.abs(nums[i] - median)

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 5ms Beats 87.23%
 * Memory 57.59MB Beats 40.43%
 */
var minMoves2 = function(nums) {
    if (nums.length === 1) return 0
    nums.sort((a,b)=>a-b)
    
    let median = 0
    let ans = 0

    if (nums.length % 2 === 1) median = nums[(nums.length/2) - 0.5]
    else median = Math.floor(0.5 * (nums[(nums.length/2) - 1] + nums[(nums.length/2)]))

    for (let i=0; i<nums.length/2; i++) ans += (median - nums[i])
    for (let i=Math.ceil(nums.length/2); i<nums.length; i++) ans += (nums[i]-median)

    return ans
};