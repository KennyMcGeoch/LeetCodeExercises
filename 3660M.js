/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 42ms Beats 94.12%
 * Memory 94.89MB Beats 91.18%

 */
var maxValue = function(nums) {
    if (nums.length === 1) return nums
    let max = new Array(...nums)
    let min = new Array(...nums)
    let right = 0

    for (let i=1; i<nums.length; i++) max[i] = Math.max(max[i],max[i-1])
    for (let i=nums.length-2; i>-1; i--) min[i] = Math.min(min[i], min[i+1])
    for (let i=0; i<nums.length; i++){
        right = Math.max(right,i)
        while(right < nums.length-1 && Math.max(nums[i], max[right]) > min[right+1]) right++
        nums[i] = max[right]
    }

    return nums
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 28ms Beats 97.06%
 * Memory 95.69MB Beats 85.29%
 */
var maxValue = function(nums) {
    if (nums.length === 1) return nums
    let max = new Array(...nums)
    let min = new Array(...nums)
    let right = 0

    for (let i=1; i<nums.length; i++) max[i] = Math.max(max[i],max[i-1])
    for (let i=nums.length-2; i>-1; i--) min[i] = Math.min(min[i], min[i+1])
    for (let i=0; i<nums.length; i++){
        right = Math.max(right,i)
        while(right < nums.length-1 && max[right] > min[right+1]) right++
        nums[i] = max[right]
    }

    return nums
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 23ms Beats 100.00%
 * Memory 97.67MB Beats 47.06%
 */
var maxValue = function(nums) {
    if (nums.length === 1) return nums
    let max = new Array(...nums)
    let min = new Array(...nums)
    let right = 0

    for (let i=1; i<nums.length; i++){
        if (max[i-1] > max[i]) max[i] = max[i-1]
    }
    for (let i=nums.length-2; i>-1; i--){
        if (min[i] > min[i+1]) min[i] = min[i+1]
    }
    for (let i=0; i<nums.length; i++){
        right = Math.max(right,i)
        while(right < nums.length-1 && max[right] > min[right+1]) right++
        nums[i] = max[right]
    }

    return nums
};