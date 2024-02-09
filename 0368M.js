/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 83 ms, faster than 36.71% of JavaScript online submissions for Largest Divisible Subset.
 * Memory Usage: 52.8 MB, less than 13.92% of JavaScript online submissions for Largest Divisible Subset.
 */
var largestDivisibleSubset = function(nums) {
    
    let hash = {}
    let max = 1
    let last = 0
    nums.sort((a,b)=>a-b)
    let temp = []
    
    for (let i=0; i<nums.length; i++){
        temp = []
        for (let j=i-1; j>-1; j--){
            if (nums[i] % nums[j] === 0){
                if (hash[nums[j]].length > temp.length){
                    temp = hash[nums[j]]
                    if (temp.length === max){
                        j = -1
                        max++
                        last = i
                    }
                }
            }
        }
        temp
        hash[nums[i]] = [...temp]
        hash[nums[i]].push(nums[i])
    }
    
    return hash[nums[last]]
        
    
};