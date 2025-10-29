/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.29MB Beats 100.00%
 */
var smallestNumber = function(n) {
    let arr = [1,3,7,15,31,63,127,255,511,1023]
    for (let i=0; i<arr.length; i++){
        if (arr[i] >= n) return arr[i]
    }
    return 1023
};