/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 * 14ms Beats 88.89% 
 * Memory 69.53MB Beats 100.00%
 */
var findSmallestInteger = function(nums, value) {
    let hash = new Array(value).fill(0)
    let ans = Infinity

    for (let i=0; i<nums.length; i++){
        nums[i] %= value
        if (nums[i] < 0) nums[i] += value
        hash[nums[i]]++
    }
    for (let i=0; i<value; i++) ans = Math.min(ans, (hash[i] * value) + i)
    return ans
};