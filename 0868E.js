/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.52MB Beats 80.56%
 */
var binaryGap = function(n) {
    let ans = 0
    let curr = 0
    while (n){
        if (n%2 === 1){
            ans = Math.max(ans,curr)
            curr = 1
        }
        else if (curr) curr++
        n = Math.floor(n/2)
    }

    return ans
};