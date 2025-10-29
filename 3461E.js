/**
 * @param {string} s
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 55.35MB Beats 98.57%
 */
var hasSameDigits = function(s) {
    s = s.split("")
    for (let i=0; i<s.length; i++) s[i] = Number(s[i])
    let loops = s.length-1
    for (let i=0; i<loops-1; i++){
        for (let j=0; j<loops-i; j++){
            s[j] += s[j+1] % 10
        }
    }
    return s[0] % 10 === s[1] % 10
};