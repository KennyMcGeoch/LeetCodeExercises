/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 8ms Beats98.65%
 * Memory 53.50MB Beats 89.19%
 */
var countMaxOrSubsets = function(nums) {
    let max = 0
    let ans = 0

    for (let i=0; i<nums.length; i++) max |= nums[i]

    function recur(ind,total){
        if (total === max){
            ans += (2 ** (nums.length-ind))
            return
        }
        else if (ind === nums.length) return
        recur(ind+1, total)
        recur(ind+1, total |= nums[ind])
    }

    recur(0,0)

    return ans
};