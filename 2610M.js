/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 165 ms, faster than 13.68% of JavaScript online submissions for Convert an Array Into a 2D Array With Conditions.
 * Memory Usage: 45.5 MB, less than 97.89% of JavaScript online submissions for Convert an Array Into a 2D Array With Conditions.
 */
var findMatrix = function(nums) {
    
    let hash = {}
    let ans = []
    
    for (let i=0; i<nums.length; i++){
        if (hash[nums[i]] === undefined) hash[nums[i]] = 1
        else hash[nums[i]]++
    }
    
    for (x in hash){
        for (let i=0; i<hash[x]; i++){
            if (ans[i] === undefined) ans.push([x])
            else ans[i].push(x)
        }
        
    }
    
    return ans
};