/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 3ms Beats 96.77%
 * Memory 64.55MB Beats 98.39%
 */
var maxRotateFunction = function(nums) {
    let tot = nums.reduce((a,b)=>a+b)
    let curr = 0
    for (let i=1; i<nums.length; i++) curr += (nums[i]*i)
    let max = curr
    for (let i=1; i<nums.length; i++){
        curr += (tot - (nums[nums.length-i]*(nums.length)))
        max = Math.max(max,curr)
    }
    return max
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats100.00%
 * Memory 65.85MB Beats 80.65%
 */
var maxRotateFunction = function(nums) {
    let tot = 0
    let curr = 0
    for (let i=0; i<nums.length; i++){
        curr += (nums[i]*i)
        tot += nums[i]
    }
    let max = curr
    for (let i=1; i<nums.length; i++){
        curr += (tot - (nums[nums.length-i]*(nums.length)))
        max = Math.max(max,curr)
    }
    return max
};