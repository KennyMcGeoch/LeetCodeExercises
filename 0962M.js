/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 67 ms, faster than 68.57% of JavaScript online submissions for Maximum Width Ramp.
 * Memory Usage: 57.1 MB, less than 17.14% of JavaScript online submissions for Maximum Width Ramp.
 */
var maxWidthRamp = function(nums) {
    let rightMax = [...nums]
    
    for (let i=nums.length-2; i>=0; i--){
        rightMax[i] = Math.max(rightMax[i], rightMax[i+1])
    }
    
    let min = nums[0] + 1
    let right = 0
    let left = 0
    let ramp = 0
    
    while (right < nums.length){
        while (nums[left] >= min) left++
        min = nums[left]
        while(rightMax[right] >= min && right < nums.length) right++
        ramp = Math.max(ramp, right - left - 1)
    }
    return ramp
};