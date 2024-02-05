/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * Runtime: 59 ms, faster than 82.86% of JavaScript online submissions for Divide Two Integers.
 * Memory Usage: 53.1 MB, less than 6.39% of JavaScript online submissions for Divide Two Integers.
 */
var divide = function(dividend, divisor) {
     
    if (dividend === 0) return 0
    let count = 1
    let negVal = false
    if (dividend < 0 && divisor > 0){
        dividend = -dividend
        negVal = true
    }
    else if (dividend > 0 && divisor < 0){
        divisor = -divisor
        negVal = true
    }
    else if (dividend < 0 && divisor < 0){
        divisor = -divisor
        dividend = -dividend
    }
    let multiples = {1: divisor}
    while (dividend > divisor){
        divisor += divisor
        count += count
        multiples[count] = divisor
    }
    
    let ans = 0
    
    while (dividend > 0 && count > 0.9){
        while (dividend >= multiples[count]){
            dividend -= multiples[count]
            ans += count
        }
        count /= 2
    }
    
    
    if (negVal) return -ans
    
    if (ans > 2147483647) ans = 2147483647
    
   
    return ans // return Math.trunc(dividend/divisor) is one line solution ignoring contraints
};