/**
 * @param {number} n
 * @return {number}
 * Runtime: 51 ms, faster than 64.12% of JavaScript online submissions for Calculate Money in Leetcode Bank.
 * Memory Usage: 41.7 MB, less than 73.54% of JavaScript online submissions for Calculate Money in Leetcode Bank.
 */
var totalMoney = function(n) {
    let ans = 0
    let i = 0
    
    while (n > 6){
        n -= 7
        ans += (28 + (7 * i++))
    }
    while (n-- > 0){
        ans += ++i
    }
    return ans
    
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 41 ms, faster than 97.46% of JavaScript online submissions for Calculate Money in Leetcode Bank.
 * Memory Usage: 42.3 MB, less than 17.30% of JavaScript online submissions for Calculate Money in Leetcode Bank.
 */
var totalMoney = function(n) {
    let ans = 0
    let i = 0
    let loops = Math.floor(n/7)
    
    ans += (loops * 28)
    for (let j=1; j<loops; j++) i += j
    ans += (i * 7)
    n %= 7
    while (n-- > 0){
        ans += ++loops
    }
    
    return ans
    
};