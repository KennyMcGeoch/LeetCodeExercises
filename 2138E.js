/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 * Runtime 0ms Beats 100.00%
 * Memory 53.78MB Beats 54.26%
 */
var divideString = function(s, k, fill) {
    let ans = []
    for (let i=0; i<s.length; i += k){
        ans.push(s.slice(i,i+k))
    }
    while(ans[ans.length-1].length < k) ans[ans.length-1] += fill

    return ans
};