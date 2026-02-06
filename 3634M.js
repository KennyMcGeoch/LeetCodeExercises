/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 67ms Beats 100.00%
 * Memory 71.82MB Beats 100.00%
 */
var minRemoval = function(nums, k) {
    let ans = 0
    let left = 0
    nums.sort((a,b)=>a-b)

    for (let i=1; i<nums.length; i++){
        while(nums[left] * k < nums[i])left++
        if (i-left > ans) ans++
    }

    return nums.length - (ans+1)
};