/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 0ms Beats 100.00%
 * Memory 57.82MB Beats 26.67%
 */
 let arr = new Array(1001).fill(-1)
 let temp = 0
 for (let i=1; i<999; i++){
    temp = i | (i+1)
    if (temp < 1000 && arr[temp] === -1) arr[temp] = i
 }
var minBitwiseArray = function(nums) {
    let ans = []
    for (let i=0; i<nums.length; i++) ans.push(arr[nums[i]])
    return ans
};