/**
 * @param {string} s
 * @return {string}
 * Runtime 107ms Beats 22.22%
 * Memory 82.54MB Beats 37.04%
 */
var processStr = function(s) {
    let arr = []

    for (let i=0; i<s.length; i++){
        if (s[i] === "%") arr.reverse()
        else if (s[i] === "#") arr = [...arr,...arr]
        else if (s[i] === "*") arr.pop()
        else arr.push(s[i])
    }

    return arr.join("")
};

/**
 * @param {string} s
 * @return {string}
 * Runtime 2ms Beats 81.48%
 * Memory 61.94MB Beats 100.00%


 */
var processStr = function(s) {
    let ans = ""

    for (let i=0; i<s.length; i++){
        if (s[i] === "%") ans = ans.split("").reverse().join("")
        else if (s[i] === "#") ans += ans
        else if (s[i] === "*") ans = ans.slice(0,ans.length-1)
        else ans += s[i]
    }

    return ans
};