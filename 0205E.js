/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 112 ms, faster than 61.50% of JavaScript online submissions for Isomorphic Strings.
 * Memory Usage: 43.6 MB, less than 53.55% of JavaScript online submissions for Isomorphic Strings.
 */
 var isIsomorphic = function(s, t) {
    let arrayObj = {}
    let iterations = s.length
    let previousUsed = []

    for (i=0; i<iterations; i++){
        if (arrayObj[s[i]] === undefined && !(previousUsed.includes(t[i]))){
            arrayObj[s[i]] = t[i]
            previousUsed.push(t[i])
        }
        else if (arrayObj[s[i]] !== t[i]){
            return false
        }
        console.log(arrayObj[s[i]])
        console.log(t[i])
    }

    return true
};

isIsomorphic("pater", "title");
