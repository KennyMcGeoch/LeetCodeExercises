/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.86MB Beats 98.00%
 */
var maxSum = function(nums) {
    let arr = new Array(101).fill(0)
    let ans = 0

    for (let i=0; i<nums.length; i++){
        if (nums[i] > -1){
            if (arr[nums[i]]++ === 0) ans += nums[i]
        }
    }
    if (ans || arr[0]) return ans
    else return Math.max(...nums)
};