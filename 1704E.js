/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 79 ms, faster than 84.38% of JavaScript online submissions for Determine if String Halves Are Alike.
 * Memory Usage: 42.7 MB, less than 70.31% of JavaScript online submissions for Determine if String Halves Are Alike.
 */
 var halvesAreAlike = function(s) {
    
    let iterations = s.length
    let half = iterations / 2
    let count = 0
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    
    for (i=0; i<half; i++){
        if (vowels.has(s[i])) count++
    }
    for (i=half; i<iterations; i++){
        if (vowels.has(s[i])) count--
    }
    return count === 0   
};