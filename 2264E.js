/**
 * @param {string} num
 * @return {string}
 * Runtime: 47 ms, faster than 93.57% of JavaScript online submissions for Largest 3-Same-Digit Number in String.
 * Memory Usage: 42.8 MB, less than 69.65% of JavaScript online submissions for Largest 3-Same-Digit Number in String.
 */
var largestGoodInteger = function(num) {
    
    let ans = -1
    let loops = num.length-2
    
    for (let i=0; i<loops; i++){
        if (num[i] === num[i+1] && num[i] === num[i+2]){
            ans = Math.max(Number(num.slice(i,i+3)), ans)
            if (ans === 999) return "999"
        }
    }
    if (ans === -1) return ""
    else if (ans === 0) return "000"
    
    return ans.toString()
    
};

/**
 * @param {string} num
 * @return {string}
 * Runtime 0ms Beats 100.00%
 * Memory 83.72MB Beats 83.15%
 */
var largestGoodInteger = function(num) {
    
    let max = -1
    let curr = num[0]
    let len = 1
    
    for (let i=1; i<num.length; i++){
        if (num[i] <= max) len = 0
        else if(num[i] === curr){
            len++
            if (len === 3) max = num[i]
        }
        else len = 1
        curr = num[i]
    }
    if (max === -1) return ""
    
    return max + max + max
    
};