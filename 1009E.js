/**
 * @param {number} n
 * @return {number}
 * Runtime: 60 ms, faster than 57.29% of JavaScript online submissions for Complement of Base 10 Integer.
 * Memory Usage: 41.8 MB, less than 78.13% of JavaScript online submissions for Complement of Base 10 Integer.
 */
var bitwiseComplement = function(n) {
    if (n === 0)return 1
    let pow = 0
    while (2 ** pow <= n){
        pow++
    }
    
    return 2 ** pow - n - 1
    
};
    