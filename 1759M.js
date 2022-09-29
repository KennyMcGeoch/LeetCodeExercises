/**
 * @param {string} s
 * @return {number}
 * Runtime: 98 ms, faster than 88.00% of JavaScript online submissions for Count Number of Homogenous Substrings.
 * Memory Usage: 49.3 MB, less than 28.00% of JavaScript online submissions for Count Number of Homogenous Substrings.
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

countHomogenous("abbcccaa")