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