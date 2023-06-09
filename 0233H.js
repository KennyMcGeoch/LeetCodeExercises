/**
 * @param {number} n
 * @return {number}
 * Runtime: 50 ms, faster than 91.84% of JavaScript online submissions for Number of Digit One.
 * Memory Usage: 41.7 MB, less than 73.47% of JavaScript online submissions for Number of Digit One.
 */
var countDigitOne = function(n) {
    let total = 0
    let num = n.toString()
    let len = num.length - 1
    
    while(num.length){
        if (num.charAt(0) === "1") {
            total += (len--*(10 ** len) + 1)
            if (num.length > 1)total += parseInt(num.slice(1))
        }
        else if (num.charAt(0) === "2") total += ((10 + (2 * len--)) * (10 ** len))
        else if (num.charAt(0) !== "0"){
            let dig = parseInt(num[0])
            total += ((10 + (2 * len--)) * (10 ** len++))
            total += ((dig-2) * (len--*(10 ** len)))
        }
        else len--
        
        num = num.slice(1)
    }
    

    return total 
    
};