/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 184 ms, faster than 25.06% of JavaScript online submissions for Set Mismatch.
 * Memory Usage: 45.4 MB, less than 74.16% of JavaScript online submissions for Set Mismatch.
 */
 var findErrorNums = function(nums) {
    
    let solution = [0,0]
    let iterations = nums.length
    let expVal = 1
    nums.sort((a,b) => a-b)
    
    for (i=0; i<iterations; i++){
        if (nums[i] < expVal){
            solution[0] = nums[i]
            expVal--
        }
        else if (nums[i] > expVal){
            solution[1] = expVal
            expVal++
        }
        expVal++
    }
    if (solution[1] === 0){
        solution[1] = iterations
    }
    
    return solution
    
};