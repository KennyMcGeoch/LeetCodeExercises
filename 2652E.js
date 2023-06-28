/**
 * @param {number} n
 * @return {number}
 * Runtime: 60 ms, faster than 96.69% of JavaScript online submissions for Sum Multiples.
 * Memory Usage: 43.7 MB, less than 56.69% of JavaScript online submissions for Sum Multiples.
 */
var sumOfMultiples = function(n) {
    
    let total = 0
    while (n > 0){
        if (n % 7 === 0 || n % 5 === 0 || n % 3 === 0)total += n
        n--
    }
    return total
    
};