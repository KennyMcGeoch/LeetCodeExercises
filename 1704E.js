/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 97 ms, faster than 71.48% of JavaScript online submissions for Determine if String Halves Are Alike.
 * Memory Usage: 43.6 MB, less than 41.02% of JavaScript online submissions for Determine if String Halves Are Alike.
 */
 var halvesAreAlike = function(s) {
    
    let iterations = s.length
    let half = iterations / 2
    let count = 0
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
    for (i=0; i<half; i++){
        if (vowels.includes(s[i])) count++
    }
    for (i=half; i<iterations; i++){
        if (vowels.includes(s[i])) count--
    }
    return count === 0   
};