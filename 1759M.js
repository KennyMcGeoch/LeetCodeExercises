/**
 * @param {string} s
 * @return {number}
 * Runtime: 54 ms, faster than 97.78% of JavaScript online submissions for Count Number of Homogenous Substrings.
 * Memory Usage: 49.1 MB, less than 6.67% of JavaScript online submissions for Count Number of Homogenous Substrings.
 */
 var countHomogenous = function(s) {

    let nums = s.split("")
    let count = 1
    let runningCount = 1
    let iterations = nums.length - 1

    for (i=0; i<iterations; i++){
        if (nums[i] === nums[i+1]){
            count++
        }
        else{
            count = 1
        }
        runningCount += count
    }

    return runningCount % 1000000007
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 58 ms, faster than 93.33% of JavaScript online submissions for Count Number of Homogenous Substrings.
 * Memory Usage: 45.6 MB, less than 80.00% of JavaScript online submissions for Count Number of Homogenous Substrings.
 */
var countHomogenous = function(s) {

    let count = 1
    let runningCount = 1
    let iterations = s.length - 1

    for (i=0; i<iterations; i++){
        if (s[i] === s[i+1]){
            count++
        }
        else{
            count = 1
        }
        runningCount += count
    }

    return runningCount % 1000000007
    
};