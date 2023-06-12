/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 175 ms, faster than 100.00% of JavaScript online submissions for Neither Minimum nor Maximum.
 * Memory Usage: 51.4 MB, less than 100.00% of JavaScript online submissions for Neither Minimum nor Maximum.
 */
var findNonMinOrMax = function(nums) {
    let temp = nums.slice(0,3)
    if (temp.length < 3) return -1
    temp.sort((a,b)=>a-b)
    return temp[1]
    
};