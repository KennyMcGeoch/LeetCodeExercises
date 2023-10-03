/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 45 ms, faster than 88.84% of JavaScript online submissions for Number of Good Pairs.
 * Memory Usage: 41.8 MB, less than 52.31% of JavaScript online submissions for Number of Good Pairs.
 */
var numIdenticalPairs = function(nums) {
    
    nums.sort((a,b)=> a-b)
    
    let temp = 1
    let result = 0
    
    for (let i =1; i<nums.length; i++){
        if (nums[i] === nums[i-1])temp++
        else{
            result += ((temp ** 2 - temp)/2)
            temp = 1
        }
    }
    result += ((temp ** 2 - temp)/2)
    return result
    
};