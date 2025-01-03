/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 9ms Beats 89.68%
 * Memory 60.74MB Beats 100.00%
 */
var waysToSplitArray = function(nums) {
    let total = nums.reduce((a,b)=>a+b)
    total /= 2
    let curr = 0
    let ans = 0
    
    for (let i=0; i<nums.length-1; i++){
        curr += nums[i]
        if (curr >= total) ans++
    }

    return ans
};