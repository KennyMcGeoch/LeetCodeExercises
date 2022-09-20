/**
 * @param {string[]} strs
 * @return {string}
 * Runtime: 105 ms, faster than 39.30% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 43.2 MB, less than 31.19% of JavaScript online submissions for Longest Common Prefix.
 */
 var longestCommonPrefix = function(strs) {
    let solution = ""
    let currentVal = ""
    let iterations = strs[0].length
    for (i=0; i<iterations; i++){
        currentVal = strs[0][i]
        for (j=0; j<strs.length; j++){
            if (currentVal !== strs[j][i]){
                return solution
            }
        }
        solution += strs[0][i]
    }
    console.log(solution)
    return solution;
};



longestCommonPrefix(["flower","flow","flight"])
