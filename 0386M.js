/**
 * @param {number} n
 * @return {number[]}
 * Runtime 2ms Beats 94.05%
 * Memory 61.67MB Beats 84.52%
 */
var lexicalOrder = function(n) {
    let ans = []

    function recur(num){
        if (num > n) return
        ans.push(num)
        recur(num*10)
        if (num % 10 !== 9) recur(num+1)
        return
    }

    recur(1)
    
    return ans;
};