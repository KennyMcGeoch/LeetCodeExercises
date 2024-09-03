/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime: 40 ms, faster than 98.74% of JavaScript online submissions for Sum of Digits of String After Convert.
 * Memory Usage: 49.4 MB, less than 88.05% of JavaScript online submissions for Sum of Digits of String After Convert.
 */
var getLucky = function(s, k) {
    let str = ""
    
    for (let i=0; i<s.length; i++) str += s.charCodeAt(i) - 96
    
    for (let i=0; i<k; i++){
        let num = 0
        for (let j=0; j<str.length; j++) num += Number(str[j])
        str = num.toString()
    }
    
    return Number(str)
    
};