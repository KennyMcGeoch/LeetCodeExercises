/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 71 ms, faster than 68.02% of JavaScript online submissions for Degree of an Array.
 * Memory Usage: 52.5 MB, less than 88.74% of JavaScript online submissions for Degree of an Array.
 */
var findShortestSubArray = function(nums) {
    
    let count = {}
    let first = {}
    
    for (let i=0; i<nums.length; i++){
        count[nums[i]] = (count[nums[i]] || 0) + 1
        if (first[nums[i]] === undefined) first[nums[i]] = [i,i]
        else first[nums[i]][1] = i
    }

    let max = 0
    for (x in count) max = Math.max(max, count[x])      
    let ans = 50001
    for (x in count){
        if (count[x] === max){
            ans = Math.min(ans, first[x][1]-first[x][0])
        }
    }
    
    return ans+1
    
};