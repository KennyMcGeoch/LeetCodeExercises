/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 6418 ms, faster than 5.01% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 43.4 MB, less than 59.04% of JavaScript online submissions for Isomorphic Strings.
 */
 var isIsomorphic = function(s, t) {
    for (i=0; i<s.length; i++){
        
        for (j= (i+1); j<s.length; j++){
            if (s[i] === s[j] && t[i] !== t[j]){
                return false
            }
        }
        for (j= (i+1); j<s.length; j++){
            if (t[i] === t[j] && s[i] !== s[j]){
                return false
            }
        }
    }
    return true
};

isIsomorphic("paper", "title");
