/**
 * @param {string} s
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 52.60MB Beats 92.31%
 */
var scoreOfParentheses = function(s) {

    s = "(" + s + ")"
    return countScore(0, s.length-1) / 2
    
    function countScore(left,right){
        if (right - left === 1) return 1
        let count = 0
        let total = 0
        for (let i=left+1; i<right; i++){
            if (s[i] === "(") count++
            else count--

            if (count === 0){
                 total += countScore(left+1, i)
                 left = i
            }
        }
        return total * 2
    }
};