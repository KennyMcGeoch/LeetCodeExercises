/**
 * @param {string} s
 * @return {number}
 * Runtime: 50 ms, faster than 83.33% of JavaScript online submissions for Number of Steps to Reduce a Number in Binary Representation to One.
 * Memory Usage: 51.1 MB, less than 18.52% of JavaScript online submissions for Number of Steps to Reduce a Number in Binary Representation to One.
 */
var numSteps = function(s) {
    
    let ans = 0
    let num = BigInt('0b' + s)
    while (num > 1){
        if (num % 2n === 1n){ 
            num += 1n
            ans++
        }
        num /= 2n
        ans++
    }
    
    return ans
    
};