/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 * Runtime: 116 ms, faster than 45.61% of JavaScript online submissions for Adding Spaces to a String.
 * Memory Usage: 90.1 MB, less than 55.00% of JavaScript online submissions for Adding Spaces to a String.
 */
var addSpaces = function(s, spaces) {
    let count = 0
    let ans = ""
    
    for (let i=0; i<s.length; i++){
        if (i === spaces[count]){
            ans += " "
            count++
        }
        ans += s[i]
    }
    return ans
};

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 * Runtime: 54 ms, faster than 91.23% of JavaScript online submissions for Adding Spaces to a String.
 * Memory Usage: 85.2 MB, less than 86.67% of JavaScript online submissions for Adding Spaces to a String.
 */
var addSpaces = function(s, spaces) {
    let count = 0
    let ans = ""
    
    for (let i=0; i<spaces.length; i++){
        ans += s.slice(count, spaces[i]) + " "
        count = spaces[i]
    }
    ans += s.slice(count,s.length)
    return ans
};