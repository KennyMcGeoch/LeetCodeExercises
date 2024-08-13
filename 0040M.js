/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Runtime: 61 ms, faster than 86.44% of JavaScript online submissions for Combination Sum II.
 * Memory Usage: 56.1 MB, less than 16.01% of JavaScript online submissions for Combination Sum II.
 */
var combinationSum2 = function(candidates, target) {
    
    candidates.sort((a,b)=>a-b)
    let nums = {}
    for (let i=0; i<candidates.length; i++) nums[candidates[i]] = (nums[candidates[i]] || 0) + 1
    
    let vals = Object.keys(nums)
    let valTot = Object.values(nums)
    
    for (let i=0; i<vals.length; i++) vals[i] = Number(vals[i])
    
    let ans = []
    
    function recur(arr,sum, ind){
        if (ind === vals.length) return
        recur(arr,sum,ind+1)
        let newArr = [...arr]
        for (let i=0; i<valTot[ind]; i++){
            newArr.push(vals[ind])
            sum += vals[ind]
            if (sum === target){
                ans.push(newArr)
                return
            }
            else if (sum > target) return
            else recur(newArr, sum, ind+1)
        }
    }
    recur([],0,0)
    
    return ans
};