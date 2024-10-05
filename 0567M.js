/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Runtime: 57 ms, faster than 96.39% of JavaScript online submissions for Permutation in String.
 * Memory Usage: 50 MB, less than 98.52% of JavaScript online submissions for Permutation in String.
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) return false
    let count = new Array(26).fill(0)
    let neg = 0
    
    for (let i=0; i<s1.length; i++) count[s1.charCodeAt(i)-97]++
    
    for (let i=0; i<s1.length; i++){
        if (count[s2.charCodeAt(i)-97]-- === 0) neg--
    }
    
    if (neg === 0) return true
    
    for (let i=s1.length; i<s2.length; i++){
        if (count[s2.charCodeAt(i-s1.length)-97]++ === -1) neg++
        if (count[s2.charCodeAt(i)-97]-- === 0) neg--
        if (neg === 0) return true
    }
    
    return false
};