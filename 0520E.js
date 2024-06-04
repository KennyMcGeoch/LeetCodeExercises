/**
 * @param {string} word
 * @return {boolean}
 * Runtime: 52 ms, faster than 76.37% of JavaScript online submissions for Detect Capital.
 * Memory Usage: 48.6 MB, less than 95.24% of JavaScript online submissions for Detect Capital.
 */
var detectCapitalUse = function(word) {
    let cap = false
    let lower = false
    
    if (word.charCodeAt(0) > 90) lower = true
    
    for (let i=1; i<word.length; i++){
        if (cap && word.charCodeAt(i) > 90) return false
        if (lower && word.charCodeAt(i) < 91) return false
        if (word.charCodeAt(i) > 90) lower = true
        if (word.charCodeAt(i) < 91) cap = true
    }    
    
    return true    
    
};

/**
 * @param {string} word
 * @return {boolean}
 * Runtime: 41 ms, faster than 98.70% of JavaScript online submissions for Detect Capital.
 * Memory Usage: 48.4 MB, less than 97.69% of JavaScript online submissions for Detect Capital.
 */
var detectCapitalUse = function(word) {
    let cap = false
    let lower = false
    
    if (word.charCodeAt(0) > 90) lower = true
    
    for (let i=1; i<word.length; i++){
        if (cap && word.charCodeAt(i) > 90) return false
        else if (lower && word.charCodeAt(i) < 91) return false
        if (word.charCodeAt(i) > 90) lower = true
        else cap = true
    }
    
    
    return true
    
    
};