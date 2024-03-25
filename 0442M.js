/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 121 ms, faster than 86.31% of JavaScript online submissions for Find All Duplicates in an Array.
Memory Usage: 52 MB, less than 50.72% of JavaScript online submissions for Find All Duplicates in an Array.
 */
 var findDuplicates = function(nums) {

    let storedVal = {}
    let solution = []
    let iterations = nums.length

    for (i=0; i< iterations; i++){
        if (storedVal[nums[i]] === undefined){
            storedVal[nums[i]] = 1
        }
        else{
            solution.push(nums[i])
        }
    }

    return solution
    
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 77 ms, faster than 85.58% of JavaScript online submissions for Find All Duplicates in an Array.
 * Memory Usage: 59.1 MB, less than 63.32% of JavaScript online submissions for Find All Duplicates in an Array.
 */
var findDuplicates = function(nums) {

    let ans = new Array(nums.length).fill(0)
     
    for (i=0; i< nums.length; i++){
        if (ans[nums[i]-1] === 0) ans[nums[i]-1] -= nums[i]
        else ans[nums[i]-1] *= -1
    }

    return ans.filter((a)=>a>0)
    
};