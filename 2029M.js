/**
 * @param {number[]} stones
 * @return {boolean}
 * Runtime 2ms Beats 100.00%
 * Memory 66.74MB Beats 90.00%
 */
var stoneGameIX = function(stones) {
    let arr = new Array(3).fill(0)

    for (let i=0; i<stones.length; i++){
        arr[stones[i]%3]++
    }

    if (arr[0]%2 === 0) return arr[1] && arr[2]

    return Math.abs(arr[1] - arr[2]) > 2
};