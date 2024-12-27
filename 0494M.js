/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime 1765ms Beats10.42%
 * Memory 49.08MB Beats78.25%
 */
var findTargetSumWays = function(nums, target) {
    let ans = 0
    
    function recur(tot,ind){
        if (ind === nums.length){
            if (tot === target)ans++
            return
            }
        recur(tot+nums[ind],ind+1)
        recur(tot-nums[ind],ind+1)
        }
    recur(0,0)
    return ans
};