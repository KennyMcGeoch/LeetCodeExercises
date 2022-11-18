/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 121 ms, faster than 39.62% of JavaScript online submissions for Ugly Number.
 * Memory Usage: 43.6 MB, less than 48.27% of JavaScript online submissions for Ugly Number.
 */
 var isUgly = function(n) {

    while (n > 1){
        if (n % 2 === 0) n /= 2
        else if (n % 3 === 0) n /= 3
        else if (n % 5 === 0) n /= 5
        else break
    }

    if (n === 1) return true
    return false    
};