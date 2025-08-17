/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 * Runtime 4ms Beats 94.44%
 * Memory 55.79MB Beats 88.89%
 */
var new21Game = function(n, k, maxPts) {
    if (k === 0 || k+maxPts <= n) return 1
    let arr = new Array(n + 1)
    arr[0] = 1
    let ans = 0
    let curr = 1

    for (let i=1; i<=n; i++){
        arr[i] = (curr / maxPts)
        if (i < k) curr += arr[i]
        if (i - maxPts >= 0 && i - maxPts < k) curr -= arr[i-maxPts]
    }
    for (let i=k; i<=n; i++) ans += arr[i]

    return ans
};