/**
 * @param {string} s
 * @return {number}
 * Runtime 34ms Beats 100.00%
 * Memory 57.45MB Beats 100.00%
 */
var longestBalanced = function(s) {
    let arr = new Array(26)
    let max = 0
    let num = 0
    let ans = 0

    for (let i=0; i<s.length; i++){
        arr.fill(0)
        max = 0
        num = 0
        if (i + ans >= s.length) return ans
        for (let j=i; j<s.length; j++){
            if (arr[s.charCodeAt(j)-97] === 0) num++
            if (arr[s.charCodeAt(j)-97]++ === max) max++
            if ((max * num )=== (j+1-i)) ans = Math.max(ans, max*num)
        }
    }
    return ans
};