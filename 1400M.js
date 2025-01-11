/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * Runtime 4ms Beats 84.00%
 * Memory 52.66MB Beats 76.00%
 */
var canConstruct = function(s, k) {
    if (k > s.length) return false
    let hash = new Array(26).fill(0)
    for (let i=0; i<s.length; i++) hash[s.charCodeAt(i)-97]++
    let odd = 0
    for (let i=0; i<26; i++){
        if (hash[i] % 2 === 1) odd++
    }
    if (odd > k) return false
    return true
};

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * Runtime 3ms Beats 92.00%
 * Memory 52.31MB Beats 88.00%
 */
var canConstruct = function(s, k) {
    if (k > s.length) return false
    let hash = new Array(26).fill(0)
    for (let i=0; i<s.length; i++) hash[s.charCodeAt(i)-97]++
    let odd = 0
    for (let i=0; i<26; i++) odd += (hash[i] % 2)
    if (odd > k) return false
    return true
};