/**
 * @param {string} s
 * @return {number}
 * Runtime: 135 ms, faster than 22.86% of JavaScript online submissions for Number of Substrings With Only 1s.
 * Memory Usage: 46 MB, less than 14.29% of JavaScript online submissions for Number of Substrings With Only 1s.
 */
 var numSub = function(s) {

    let nums = s.split("")
    let count = 0
    let runningCount = 0
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        if (nums[i] === "1"){
            count++
        }
        else{
            count = 0
        }
        runningCount += count
    }

    return runningCount % 1000000007
};