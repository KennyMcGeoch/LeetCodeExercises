/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Runtime 6ms Beats 73.53%
 * Memory 59.41MB Beats 97.06%
 */
var checkStrings = function(s1, s2) {
    let arr = new Array(26).fill(0)
    for (let i=0; i<s1.length; i += 2){
        arr[s1.charCodeAt(i)-97]++
    }
    for (let i=0; i<s1.length; i += 2){
        if (arr[s2.charCodeAt(i)-97]-- === 0) return false
    }
    for (let i=1; i<s1.length; i += 2){
        arr[s1.charCodeAt(i)-97]++
    }
    for (let i=1; i<s1.length; i += 2){
        if (arr[s2.charCodeAt(i)-97]-- === 0) return false
    }
    return true
};