/**
 * @param {string} s
 * @return {string}
 * Runtime 2ms Beats 86.48%
 * Memory 54.29MB Beats 97.98%
 */
var removeOuterParentheses = function(s) {
    let ans = ""
    let count = 0

    for (let i=0; i<s.length; i++){
        if (count === 0) count++
        else if (s[i] === "("){
            count++
            ans += s[i]
        }
        else if (count === 1) count--
        else{
            count--
            ans += s[i]
        }
    }

    return ans
};

/**
 * @param {string} s
 * @return {string}
 * Runtime 3ms Beats 76.36%
 * Memory 56.22MB Beats 59.21%
 */
var removeOuterParentheses = function(s) {
    let ans = []
    let count = 0

    for (let i=0; i<s.length; i++){
        if (count === 0) count++
        else if (s[i] === "("){
            count++
            ans.push(s[i])
        }
        else if (count === 1) count--
        else{
            count--
            ans.push(s[i])
        }
    }

    return ans.join("")
};