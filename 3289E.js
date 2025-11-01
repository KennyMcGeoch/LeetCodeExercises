/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 1ms Beats86.42%
 * Memory 55.06MB Beats 95.06%
 */
var getSneakyNumbers = function(nums) {
    let ans = []
    let hash = new Set()
    for (let i=0; i<nums.length; i++){
        if (hash.has(nums[i])){
            ans.push(nums[i])
            if (ans.length === 2) return ans
        }
        hash.add(nums[i])
    }
    return ans
};