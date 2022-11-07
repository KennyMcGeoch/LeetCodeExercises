/**
 * @param {number} num
 * @return {number}
 * Runtime: 92 ms, faster than 62.30% of JavaScript online submissions for Maximum 69 Number.
 * Memory Usage: 42 MB, less than 54.18% of JavaScript online submissions for Maximum 69 Number.
 */
 var maximum69Number  = function(num) {
    
    let str = num.toString()
    str = str.replace("6","9")
    
    return parseInt(str)
    
};