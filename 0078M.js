/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 45 ms, faster than 99.30% of JavaScript online submissions for Subsets.
 * Memory Usage: 52.6 MB, less than 31.25% of JavaScript online submissions for Subsets.
 */
var subsets = function(nums) {
    
    let ans = [[]]
    
    recur([],0)
    
    function recur(arr, ind){
        let temp = [...arr]
        if (ind >= nums.length) return
        recur(arr, ind+1)
        temp.push(nums[ind])
        ans.push(temp)
        return recur(temp,ind+1)
    }
    
    return ans
    
};