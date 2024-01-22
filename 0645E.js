/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 184 ms, faster than 25.06% of JavaScript online submissions for Set Mismatch.
 * Memory Usage: 45.4 MB, less than 74.16% of JavaScript online submissions for Set Mismatch.
 * Runtime: 80 ms, faster than 33.44% of JavaScript online submissions for Set Mismatch.
 * Memory Usage: 53.5 MB, less than 5.25% of JavaScript online submissions for Set Mismatch.
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

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 81 ms, faster than 32.46% of JavaScript online submissions for Set Mismatch.
 * Memory Usage: 54 MB, less than 5.25% of JavaScript online submissions for Set Mismatch.
 */
var findErrorNums = function(nums) {
    
    let dupe = 0
    let iterations = nums.length
    nums.sort((a,b) => a-b)
    
    function findDouble(arr){
        for (let i=0; i<iterations; i++){
            if (arr[i] === arr[i+1]){
                dupe = nums[i]
                return i+2
            }
        }
    }
    let doub = findDouble(nums)

    if (doub !== dupe){
        for (let i = doub; i<iterations; i++) if (i !== nums[i]) return [dupe, i]
    }
    else for (let i = 0; i<iterations; i++) if (i+1 !== nums[i]) return [dupe, i+1]
    
    return [dupe, iterations]
    
};