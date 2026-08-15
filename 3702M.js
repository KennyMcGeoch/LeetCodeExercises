/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 73.50MB Beats 71.43%
 */
var longestSubsequence = function(nums) {
    let sum = 0
    let zeros = true

    for (let i=0; i<nums.length; i++){
        sum ^= nums[i]
        if (zeros){
            if (nums[i]) zeros = false
        }
    }

    if (sum) return nums.length
    else if (zeros === false) return nums.length-1
    else return 0
};