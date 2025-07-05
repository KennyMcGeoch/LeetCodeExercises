/**
 * @param {number[]} arr
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 52.59MB Beats 100.00%
 */
var findLucky = function(arr) {
    let ans = new Array(501).fill(0)
    for (let i=0; i<arr.length; i++) ans[arr[i]]++
    for (let i=arr.length; i>0; i--){
        if (ans[i] === i) return i
    }

    return -1
};