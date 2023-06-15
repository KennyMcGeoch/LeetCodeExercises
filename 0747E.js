/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 61 ms, faster than 52.88% of JavaScript online submissions for Largest Number At Least Twice of Others.
 * Memory Usage: 42.2 MB, less than 38.35% of JavaScript online submissions for Largest Number At Least Twice of Others.
 */
var dominantIndex = function(nums) {
    let dupl = [...nums]
    nums.sort((a,b)=>b-a)    
    if ((nums[0] / nums[1])>= 2) return dupl.indexOf(nums[0])
    return -1
    
};