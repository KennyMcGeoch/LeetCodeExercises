/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 94 ms, faster than 55.08% of JavaScript online submissions for Is Subsequence.
 * Memory Usage: 41.9 MB, less than 75.90% of JavaScript online submissions for Is Subsequence.
 */
 var isSubsequence = function(s, t) {
    let j=0;
    if (s.length === 0){
        return true
    }
    for (i=0; i<t.length; i++){
        if (s[j] === t[i]){
            j++;
        }
        if (j === s.length){
            return true;
        }
    }
    return false;
    
};

isSubsequence("", "");
