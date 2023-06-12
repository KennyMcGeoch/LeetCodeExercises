/**
 * @param {number[]} nums
 * @return {string[]}
 * Runtime: 50 ms, faster than 91.00% of JavaScript online submissions for Summary Ranges.
 * Memory Usage: 42.2 MB, less than 28.45% of JavaScript online submissions for Summary Ranges.
 */
var summaryRanges = function(nums) {
    let loops = nums.length
    if (loops === 0) return []
    let solution = []
    nums.push(false)
    let min = null
    
    for (i=0; i<loops; i++){
        if (min === null){
            if (nums[i] + 1 === nums[i+1])min = nums[i]
            else solution.push(nums[i].toString())
        }
        else if (nums[i] + 1 === nums[i+1])continue
        else{
            let temp = min + "->" + nums[i]
            solution.push(temp)
            min = null
        }
    }
    
    return solution
    
};