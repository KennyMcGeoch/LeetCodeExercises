/**
 * @param {number} num
 * @return {number}
 * Runtime: 51 ms, faster than 89.95% of JavaScript online submissions for Number Complement.
 * Memory Usage: 42.4 MB, less than 16.93% of JavaScript online submissions for Number Complement.
 */
var findComplement = function(num) {
    let pow = 0
    while (2 ** pow <= num){
        pow++
    }
    
    return 2 ** pow - num - 1
    
};