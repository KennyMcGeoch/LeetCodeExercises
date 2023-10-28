/**
 * @param {number} n
 * @return {number}
 * Runtime: 74 ms, faster than 53.70% of JavaScript online submissions for Count Vowels Permutation.
 * Memory Usage: 50.5 MB, less than 35.18% of JavaScript online submissions for Count Vowels Permutation.
 */
var countVowelPermutation = function(n) {
    
    let a = {0:1}
    let e = {0:1}
    let i = {0:1}
    let o = {0:1}
    let u = {0:1}
    
    for (let j=1; j<n; j++){
        a[j] = e[j-1]
        e[j] = (a[j-1] + i[j-1]) % 1000000007
        i[j] = (a[j-1] + e[j-1] + o[j-1] + u[j-1]) % 1000000007
        o[j] = i[j-1] + u[j-1]
        u[j] = a[j-1]
    }
    n--
    return (a[n] + e[n] + i[n] + o[n] + u[n]) % 1000000007   
    
};