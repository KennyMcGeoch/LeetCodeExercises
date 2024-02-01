/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 * Runtime: 314 ms, faster than 87.62% of JavaScript online submissions for Divide Array Into Arrays With Max Difference.
 * Memory Usage: 80.8 MB, less than 91.75% of JavaScript online submissions for Divide Array Into Arrays With Max Difference.
 */
var divideArray = function(nums, k) {
    
    k++
    let ans = []
    nums.sort((a,b)=>a-b)
    
    for (let i=0; i<nums.length; i+=3){
        if (nums[i] + k > nums[i+2])ans.push([nums[i],nums[i+1],nums[i+2]])
        else return []
    }
    
    return ans
    
};