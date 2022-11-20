/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 69 ms, faster than 86.80% of JavaScript online submissions for Number of Distinct Averages.
 * Memory Usage: 42 MB, less than 62.38% of JavaScript online submissions for Number of Distinct Averages.
 */
 var distinctAverages = function(nums) {
     
    let solution = []
    let iterations = nums.length / 2
    nums.sort((a,b)=>a-b)
    let j = nums.length - 1

    for (i=0; i<iterations; i++){
        last = nums[j--]
        first = nums[i]
        average = (first + last)/2
        if (solution.includes(average) === false)solution.push(average)
    }
    return solution.length    
};