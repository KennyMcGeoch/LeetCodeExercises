/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 * Runtime 27ms Beats 60.87%
 * Memory 89.01MB Beats 13.04%
 */
var climbStairs = function(n, costs) {
    let arr = new Array(n+3).fill(Infinity)
    arr[0] = 0

    for (let i=0; i<n; i++){
        arr[i+1] = Math.min(arr[i+1],arr[i]+1 + costs[i])
        arr[i+2] = Math.min(arr[i+2],arr[i]+4 + costs[i+1])
        arr[i+3] = Math.min(arr[i+3],arr[i]+9 + costs[i+2])
    }

    return arr[n]
};