/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.29MB Beats 96.43%
 */
var differenceOfSums = function(n, m) {
    let ans = 0

    for (let i=1; i<=n; i++){
        if (i % m === 0) ans -= i
        else ans += i
    }

    return ans
};