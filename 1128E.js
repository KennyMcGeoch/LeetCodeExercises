/**
 * @param {number[][]} dominoes
 * @return {number}
 * Runtime 2ms Beats 100.00%
 * Memory 56.54MB Beats 100.00%
 */
var numEquivDominoPairs = function(dominoes) {
    let ans = 0
    let arr = new Array(45).fill(0)
    let ind = [0,-1,7,14,20,25,29,32,34,35]

    for (let i=0; i<dominoes.length; i++){
        ans += arr[ind[Math.min(...dominoes[i])] + Math.max(...dominoes[i])]++
    }

    return ans
};