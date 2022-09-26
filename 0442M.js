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