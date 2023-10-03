/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * Runtime: 48 ms, faster than 94.94% of JavaScript online submissions for Shuffle String.
 * Memory Usage: 43.8 MB, less than 94.40% of JavaScript online submissions for Shuffle String.
 */
var restoreString = function(s, indices) {
    
    let hash = {}
    
    for (let i=0; i<indices.length; i++){
        hash[indices[i]] = s[i]
    }
    let solution = ""
    for (let i=0; i<indices.length; i++){
        solution += hash[i]
    }
    return solution    
    
};

var restoreString2 = function(s, indices) { 
    
    let hash = {}
    
    for (let i=0; i<indices.length; i++){
        hash[indices[i]] = s[i]
    }
    return Object.values(hash).join("") // This is less efficient than looping
    
};