/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 119ms Beats 100.00%
 * Memory 66.26MB Beats83.33%
 */
var maxDistinctElements = function(nums, k) {
    let curr = -Infinity
    let ans = 0
    nums.sort((a,b)=>a-b)
    for (let i=0; i<nums.length; i++){
        if (nums[i] + k > curr){
            ans++
            curr = Math.max(curr+1,nums[i]-k)
        }
    }
    return ans
};