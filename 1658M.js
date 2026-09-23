/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 * Runtime 4ms Beats 93.88%
 * Memory 67.05MB Beats 32.65%
 */
var minOperations = function(nums, x) {
    let sum = nums.reduce((a,b)=>a+b)
    if (sum === x) return nums.length
    if (sum < x) return -1
    sum -= x
    let curr = 0
    let left = 0
    let right = 0
    let ans = nums.length + 1


    while(right < nums.length){
        if (curr < sum) curr += nums[right++]
        else curr -= nums[left++]
        if (curr === sum) ans = Math.min(ans, nums.length - (right - left))
    }
    while(curr > sum) curr -= nums[left++]
    if (curr === sum) ans = Math.min(ans, nums.length - (right - left))

    if (ans === nums.length+1) return -1

    return ans
};