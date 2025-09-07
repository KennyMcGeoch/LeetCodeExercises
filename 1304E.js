/**
 * @param {number} n
 * @return {number[]}
 * Runtime 0ms Beats 100.00%
 * Memory 57.13MB Beats5.56%
 */
var sumZero = function(n) {
    let ans = []
    for (let i=1; i<=n/2; i++){
        ans.push(i,-i)
    }
    if (n%2 === 1) ans.push(0)

    return ans
};

/**
 * @param {number} n
 * @return {number[]}
 * Runtime 0ms Beats 100.00%
 * Memory 57.12MB Beats 5.56%
 */
var sumZero = function(n) {
    let ans = new Array(n)
    ans[0] = 0
    for (let i=1; i<n; i++){
        ans[i] = i
        ans[0] -= i
    }

    return ans
};