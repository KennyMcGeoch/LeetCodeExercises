/**
 * @param {string} num
 * @return {string}
 * Runtime: 53 ms, faster than 90.35% of JavaScript online submissions for Largest Odd Number in String.
 * Memory Usage: 45.7 MB, less than 33.01% of JavaScript online submissions for Largest Odd Number in String.
 */
var largestOddNumber = function(num) {
    
    let arr = ["1","3","5","7","9"]
    
    for (let i=num.length-1; i>-1; i--) if (arr.includes(num[i]))return num.slice(0,i+1)
    
    return ""
    
};