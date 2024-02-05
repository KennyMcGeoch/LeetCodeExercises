/**
 * @param {string} s
 * @return {number}
 * Runtime: 184 ms, faster than 35.86% of JavaScript online submissions for First Unique Character in a String.
 * Memory Usage: 45.9 MB, less than 35.81% of JavaScript online submissions for First Unique Character in a String.
 */
 var firstUniqChar = function(s) {

    let instances = {}
    let iterations = s.length

    for (i=0; i<iterations; i++){
        if (instances[s[i]] === undefined){
            instances[s[i]] = true
        }
        else{
            instances[s[i]] = false
        }
    }

    for (i=0; i<iterations; i++){
        if (instances[s[i]] === true){
            return i
        }
    }

    return -1
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 73 ms, faster than 91.18% of JavaScript online submissions for First Unique Character in a String.
 * Memory Usage: 53.5 MB, less than 17.04% of JavaScript online submissions for First Unique Character in a String.
 */
var firstUniqChar = function(s) {

    let instances = {}
    let iterations = s.length

    for (i=0; i<iterations; i++){
        if (instances[s[i]] === undefined){
            instances[s[i]] = i
        }
        else{
            instances[s[i]] = null
        }
    }
    
    let ans = Infinity
    for (x in instances){
        if (instances[x] !== null) ans = Math.min(ans, instances[x])
    }
     
     if (ans === Infinity) return -1

    return ans
    
};