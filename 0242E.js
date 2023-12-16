/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 180 ms, faster than 14.01% of JavaScript online submissions for Valid Anagram.
Memory Usage: 49.7 MB, less than 6.61% of JavaScript online submissions for Valid Anagram.
 */
 var isAnagram = function(s, t) {
    
    if (s.split('').sort().join('') === t.split('').sort().join('')){
        return true
    }
    
    return false
    
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 56 ms, faster than 95.45% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 43.1 MB, less than 77.25% of JavaScript online submissions for Valid Anagram.
 */
var isAnagram = function(s, t) {
    
    let hash = {}
    for (let i=0; i<s.length; i++){
        if (hash[s[i]] === undefined) hash[s[i]] = 1
        else hash[s[i]]++
    }
    for (let i=0; i<t.length; i++){
        if (hash[t[i]] === undefined) return false
        else if (--hash[t[i]] === 0) delete hash[t[i]]
    }
    
    return Object.keys(hash).length === 0
    
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 54 ms, faster than 97.14% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 42.6 MB, less than 87.09% of JavaScript online submissions for Valid Anagram.
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false
    
    let hash = {}
    for (let i=0; i<s.length; i++){
        if (hash[s[i]] === undefined) hash[s[i]] = 1
        else hash[s[i]]++
    }
    for (let i=0; i<t.length; i++){
        if (hash[t[i]] === undefined) return false
        else if (--hash[t[i]] === 0) delete hash[t[i]]
    }
    
    return Object.keys(hash).length === 0
    
};