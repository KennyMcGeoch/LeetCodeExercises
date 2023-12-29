/**
 * @param {string} columnTitle
 * @return {number}
 * Runtime: 63 ms, faster than 46.29% of JavaScript online submissions for Excel Sheet Column Number.
 * Memory Usage: 44.2 MB, less than 12.42% of JavaScript online submissions for Excel Sheet Column Number.
 */
var titleToNumber = function(columnTitle) {
    let ans = 0
    let digits = 1
    for (let i=columnTitle.length-1; i>-1; i--){
        let temp = columnTitle.charCodeAt(i) - 64
        temp *= digits
        digits *= 26
        ans += temp
    }
    return ans
    
};

/**
 * @param {string} columnTitle
 * @return {number}
 * Runtime: 67 ms, faster than 25.24% of JavaScript online submissions for Excel Sheet Column Number.
 * Memory Usage: 43.6 MB, less than 61.13% of JavaScript online submissions for Excel Sheet Column Number.
 */
var titleToNumber = function(columnTitle) {
    let ans = 0
    for (let i=columnTitle.length-1; i>-1; i--){
        ans += ((columnTitle.charCodeAt(i) - 64) * (26 ** ((columnTitle.length - i) - 1)))
    }
    return ans
    
};

/**
 * @param {string} columnTitle
 * @return {number}
 * Runtime: 58 ms, faster than 73.14% of JavaScript online submissions for Excel Sheet Column Number.
 * Memory Usage: 43.2 MB, less than 74.49% of JavaScript online submissions for Excel Sheet Column Number.
 */
var titleToNumber = function(columnTitle) {
    let ans = 0
    for (let i=columnTitle.length-1, pow = 1; i>-1; i--, pow *= 26){
        ans += (columnTitle.charCodeAt(i) - 64) * pow
    }
    return ans
    
};