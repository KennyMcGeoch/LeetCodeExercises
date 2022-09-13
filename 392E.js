/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 270 ms, faster than 5.14% of JavaScript online submissions for Is Subsequence.
Memory Usage: 49.3 MB, less than 5.02% of JavaScript online submissions for Is Subsequence.
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
        console.log(s.length)
        if (j === s.length){
            return true;
        }
    }
    return false;
    
};

isSubsequence("", "");