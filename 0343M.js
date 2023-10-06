/**
 * @param {number} n
 * @return {number}
 * Runtime: 40 ms, faster than 98.00% of JavaScript online submissions for Integer Break.
 * Memory Usage: 41.4 MB, less than 95.00% of JavaScript online submissions for Integer Break.
 */
var integerBreak = function(n) {
    
    if (n < 4) return n-1
    else if (n % 3 === 0) return 3 ** (n/3)
    else if (n % 3 === 1) return (3 ** ((parseInt(n/3))-1))* 4
    else return 3 ** (parseInt(n/3)) * 2
    
};