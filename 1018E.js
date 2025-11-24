/**
 * @param {number[]} nums
 * @return {boolean[]}
 * Runtime 2ms Beats 70.83%
 * Memory 59.05MB Beats 77.08%
 */
var prefixesDivBy5 = function(nums) {
    let curr = 0
    let ans = new Array(nums.length)
    for (let i=0; i<nums.length; i++){
        curr *= 2
        curr += nums[i]
        curr %= 5
        ans[i] = curr === 0
    }
    return ans
};

/**
 * @param {number[]} nums
 * @return {boolean[]}
 * Runtime 1ms Beats 95.83%
 * Memory 57.63MB Beats 95.83%
 */
var prefixesDivBy5 = function(nums) {
    let curr = 0
    let ans = []
    for (let i=0; i<nums.length; i++){
        curr *= 2
        curr += nums[i]
        curr %= 5
        ans.push(curr === 0)
    }
    return ans
};