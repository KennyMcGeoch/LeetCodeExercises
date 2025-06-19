/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 99ms Beats 97.96%
 * Memory 67.30MB Beats 85.71%
 */
var partitionArray = function(nums, k) {
    let ans = 1
    nums.sort((a,b)=>a-b)
    let max = nums[0] + k

    for (let i=1; i<nums.length; i++){
        if (nums[i] > max){
            max = nums[i] + k
            ans++
        }
    }

    return ans
};